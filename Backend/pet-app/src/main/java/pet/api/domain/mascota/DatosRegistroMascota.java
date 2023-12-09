package pet.api.domain.mascota;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DatosRegistroMascota(

        @NotBlank
        String nombre,
        @NotBlank
        String apellido,
        @NotBlank
        String edad,
        @NotBlank
        String sexo,
        @NotNull
        Especie especie
) {

}
