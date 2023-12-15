package pet.api.domain.mascota;

public record DatosListadoMascota(
        Long id,
        String nombre,
        String especie,
        String raza,
        String color,
        int edad,
        String sexo
) {

    public  DatosListadoMascota(Mascota mascota) {
        this(
                mascota.getId(),
                mascota.getNombre(),
                mascota.getEspecie(),
                mascota.getRaza(),
                mascota.getColor(),
                mascota.getEdad(),
                mascota.getSexo()
        );
    }
}
