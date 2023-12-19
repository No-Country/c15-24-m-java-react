package pet.api.domain.mascota;

import jakarta.validation.constraints.NotNull;
import pet.api.domain.historial.ClinicalHistory;

public record DatosActualizarMascota(
        @NotNull
        Long id,
        String nombre,
        ClinicalHistory clinicalHistory
) {
}
