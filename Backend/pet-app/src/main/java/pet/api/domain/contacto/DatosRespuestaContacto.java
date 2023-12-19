package pet.api.domain.contacto;


public record DatosRespuestaContacto(
        Long id,
        String nombre,
        String telefono,
        String direccion,
        String horario
) {

}
