package pet.api.domain.mascota;

import jakarta.validation.constraints.NotNull;

public record DatosActualizarMascota(
        @NotNull
        Long id,
        String nombre) {
}
