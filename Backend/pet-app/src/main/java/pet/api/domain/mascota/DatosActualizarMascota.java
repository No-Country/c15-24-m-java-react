package pet.api.domain.mascota;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;

public record DatosActualizarMascota(@NotNull Long id, String nombre, String apellido, String edad, String sexo, Especie especie) {
}
