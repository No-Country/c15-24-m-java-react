package pet.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pet.api.domain.historial.ClinicalHistory;
import pet.api.domain.historial.ClinicalService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/clinical")
public class ClinicalController {

    @Autowired
    private ClinicalService clinicalService;

    @GetMapping(value = "{id}")
    public ResponseEntity<?>  getClinicalById(
            @PathVariable("id") Long id){
        try {
            Optional<ClinicalHistory> clinicalHistory = clinicalService.findById(id);
            if (clinicalHistory.isPresent()){
                return ResponseEntity.ok(clinicalHistory.get());
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping(value = "")
    public ResponseEntity<?> getAllClinical(){
        try {
            List <ClinicalHistory> clinicalHistories = clinicalService
                    .findAllClinicalHistory();
            return ResponseEntity.ok(clinicalHistories);
        }catch (Exception e){
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> save(
            @Valid @RequestBody ClinicalHistory clinicalHistory){
        try {
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(clinicalService
                            .savedClinical(clinicalHistory));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<?> update(
            @Valid @PathVariable("id") Long id,
            @RequestBody ClinicalHistory clinicalHistory){
        try {
            return ResponseEntity.ok(clinicalService.updateClinical(id, clinicalHistory));
        }catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("{\"error\": \"An error occurred while processing the request.\"}");
        }
    }
}
