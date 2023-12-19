package pet.api.domain.contacto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "contactos")
@Entity(name = "Contacto")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Contacto {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String telefono;
    private String direccion;
    private String horario;

    private Boolean activo;

    public Contacto(DatosRegistroContacto contacto) {
        this.nombre = contacto.nombre();
        this.telefono = contacto.telefono();
        this.direccion = contacto.direccion();
        this.horario = contacto.horario();
        this.activo = true;
    }

    public void desactivarContacto() {
        this.activo = false;
    }
}
