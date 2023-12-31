package pet.api.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import pet.api.domain.calendario.Calendar;
import pet.api.domain.calendario.CalendarService;
import pet.api.domain.mascota.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/mascotas")
public class MascotaController {

    @Autowired
    private MascotaRepository mascotaRepository;

    @PostMapping
    public ResponseEntity<DatosRespuestaMascota> registrarMascota(
            @RequestBody @Valid
            DatosRegistroMascota datosRegistroMascota,
            UriComponentsBuilder uriComponentsBuilder) {
        Mascota mascota = mascotaRepository.save(new Mascota(datosRegistroMascota));
        DatosRespuestaMascota datosRespuestaMascota = new DatosRespuestaMascota(
                mascota.getId(),
                mascota.getNombre(),
                mascota.getEspecie(),
                mascota.getRaza(),
                mascota.getColor(),
                mascota.getEdad(),
                mascota.getSexo(),
                mascota.getClinicalHistory()
        );

        URI url = uriComponentsBuilder.path("/mascotas/{id}").buildAndExpand(mascota.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaMascota);
    }

    @GetMapping
    public ResponseEntity<Page<DatosListadoMascota>> listadoMascotas(
            @PageableDefault(size = 2) Pageable pageable) {
        return ResponseEntity.ok(mascotaRepository.findByActivoTrue(pageable).map(DatosListadoMascota::new));
    }

    @PutMapping
    @Transactional
    public ResponseEntity actualizarMascota(@RequestBody @Valid DatosActualizarMascota datosActualizarMascota) {
        Mascota mascota = mascotaRepository.getReferenceById(datosActualizarMascota.id());
        mascota.actualizarDatos(datosActualizarMascota);
        return ResponseEntity.ok(new DatosRespuestaMascota(
                mascota.getId(),
                mascota.getNombre(),
                mascota.getEspecie(),
                mascota.getRaza(),
                mascota.getColor(),
                mascota.getEdad(),
                mascota.getSexo(),
                mascota.getClinicalHistory()
        ));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarMascota(@PathVariable Long id) {
        Mascota mascota = mascotaRepository.getReferenceById(id);
        mascota.desactivarMascota();
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosRespuestaMascota> retornaDatosMascota(@PathVariable Long id) {
        Mascota mascota = mascotaRepository.getReferenceById(id);
        var datosMascota = new DatosRespuestaMascota(
                mascota.getId(),
                mascota.getNombre(),
                mascota.getEspecie(),
                mascota.getRaza(),
                mascota.getColor(),
                mascota.getEdad(),
                mascota.getSexo(),
                mascota.getClinicalHistory()
        );
        return ResponseEntity.ok(datosMascota);
    }


    @Autowired
    private CalendarService calendarService;

    @GetMapping(value = "{id}/calendars")
    public ResponseEntity<?> getCalendarsByMascota(@PathVariable("id") Long id) {
        try {
            List<Calendar> calendarsByMascotaId = calendarService.findCalendarsByMascotaId(id);
            return ResponseEntity.ok(calendarsByMascotaId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }

}
