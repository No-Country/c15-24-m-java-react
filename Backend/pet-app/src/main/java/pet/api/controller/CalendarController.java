package pet.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pet.api.domain.calendario.Calendar;
import pet.api.domain.calendario.CalendarService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/calendario")
public class CalendarController {

    /*
    Esto copia en el controlador de Mascota
    Esto te permite en la mascota que tengas obtener todos las fechas o calendarios de la misma

    @Autowired
    private CalendarService calendarService;

    @GetMapping(value = "{petId}/calendars")
    public ResponseEntity<?> getCalendarsByPet(@PathVariable("petId") Long petId) {
        try {
            List<Calendar> calendarsByPetId = calendarService.findCalendarsByPetId(Long petId);
            return ResponseEntity.ok(calendarsByPetId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }
     */

    @Autowired
    private CalendarService calendarService;

    @GetMapping(value = "{id}")
    public ResponseEntity<?> getCalendarById(@PathVariable("id") Long id){
        try {
            Optional<Calendar> calendar = calendarService.findById(id);
            if (calendar.isPresent()){
                return ResponseEntity.ok(calendar);
            }else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    @GetMapping(value = "")
    public ResponseEntity<?> getAllCalendars(){
        try {
            List<Calendar> calendars = calendarService.findAllCalendars();
            return ResponseEntity.ok(calendars);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> save(@Valid @RequestBody Calendar calendar){
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(calendarService.savedCalendar(calendar));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<?> update(
            @Valid @PathVariable("id") Long id,
            @RequestBody Calendar calendar){
        try {
            return ResponseEntity.ok(calendarService
                    .updateCalendar(id, calendar));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        try {
            calendarService.deleteCalendar(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }
}
