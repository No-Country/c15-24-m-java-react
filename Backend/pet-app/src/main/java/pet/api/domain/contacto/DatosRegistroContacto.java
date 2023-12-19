package pet.api.domain.contacto;

import jakarta.validation.constraints.NotBlank;

public record DatosRegistroContacto(

        @NotBlank
        String nombre,
        @NotBlank
        String telefono,
        @NotBlank
        String direccion,
        @NotBlank
        String horario
) {

}
