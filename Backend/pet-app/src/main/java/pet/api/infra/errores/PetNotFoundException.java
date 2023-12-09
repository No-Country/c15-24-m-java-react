package pet.api.infra.errores;

public class PetNotFoundException  extends RuntimeException {

    public PetNotFoundException() {
        super("La mascota ingresada no existe.");
    }
}
