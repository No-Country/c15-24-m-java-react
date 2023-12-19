package pet.api.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import pet.api.domain.contacto.Contacto;
import pet.api.domain.contacto.ContactoRepository;
import pet.api.domain.contacto.DatosRegistroContacto;
import pet.api.domain.contacto.DatosRespuestaContacto;

import java.net.URI;

@RestController
@RequestMapping("/contactos")
public class ContactoController {

    @Autowired
    private ContactoRepository contactoRepository;

    @PostMapping
    public ResponseEntity<DatosRespuestaContacto> registrarContacto(
            @RequestBody @Valid
            DatosRegistroContacto registroContacto, UriComponentsBuilder builder) {
        Contacto contacto = contactoRepository.save (new Contacto(registroContacto));
        DatosRespuestaContacto respuestaContacto = new DatosRespuestaContacto(
                contacto.getId(),
                contacto.getNombre(),
                contacto.getTelefono(),
                contacto.getDireccion(),
                contacto.getHorario()
        );

        URI uri = builder.path("/contacto/{id}").buildAndExpand(contacto.getId()).toUri();
        return ResponseEntity.created(uri).body(respuestaContacto);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity eliminarContacto(
            @PathVariable Long id) {
        Contacto contacto = contactoRepository.getReferenceById(id);
        contacto.desactivarContacto();
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosRespuestaContacto> retornaDatosContacto(
            @PathVariable Long id) {
        Contacto contacto = contactoRepository.getReferenceById(id);
        var datosContacto = new DatosRespuestaContacto(
                contacto.getId(),
                contacto.getNombre(),
                contacto.getTelefono(),
                contacto.getDireccion(),
                contacto.getHorario()
        );
        return ResponseEntity.ok(datosContacto);
    }
}
