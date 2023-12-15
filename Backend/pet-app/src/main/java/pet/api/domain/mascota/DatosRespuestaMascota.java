package pet.api.domain.mascota;

public record DatosRespuestaMascota (
        Long id,
        String nombre,
        String especie,
        String raza,
        String color,
        int edad,
        String sexo
){
}
