package pet.api.domain.mascota;

import pet.api.domain.historial.ClinicalHistory;

public record DatosRespuestaMascota (
        Long id,
        String nombre,
        String especie,
        String raza,
        String color,
        int edad,
        String sexo,
        ClinicalHistory clinicalHistory
){
}
