package pet.api.domain.mascota;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import pet.api.domain.historial.ClinicalHistory;

public record DatosRegistroMascota(

        @NotBlank
        String nombre,
        @NotBlank
        String especie,
        @NotBlank
        String raza,
        @NotBlank
        String color,
        @NotNull
        int edad,
        @NotBlank
        String sexo,
        ClinicalHistory clinicalHistory

) {

}
