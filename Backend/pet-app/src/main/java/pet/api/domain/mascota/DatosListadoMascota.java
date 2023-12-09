package pet.api.domain.mascota;

public record DatosListadoMascota(Long id, String nombre, String apellido, String edad, String sexo, String especie) {

    public  DatosListadoMascota(Mascota mascota) {
        this(
                mascota.getId(),
                mascota.getNombre(), mascota.getApellido(), mascota.getEdad(), mascota.getSexo(), mascota.getEspecie().toString());
    }
}
