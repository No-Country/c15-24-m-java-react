package pet.api.domain.contactos;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import pet.api.domain.mascota.Mascota;

public class Contactos {

//    @ManyToOne
//    @JoinColumn(name = "mascota_id")
    private Mascota mascota;
}
