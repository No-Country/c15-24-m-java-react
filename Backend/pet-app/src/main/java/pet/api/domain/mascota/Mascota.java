package pet.api.domain.mascota;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import pet.api.domain.contactos.Contactos;

@Table(name = "mascotas")
@Entity(name = "Mascota")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Mascota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String especie;
    private String raza;
    private String color;
    private int edad;
    private String sexo;

    /*@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "salud_id")
    private InfoSalud salud;

    @OneToMany(mappedBy = "mascota")
    private Contactos contactos;*/

    private Boolean activo;

    public Mascota(DatosRegistroMascota datosRegistroMascota) {
        this.activo = true;
        this.nombre = datosRegistroMascota.nombre();
        this.especie = datosRegistroMascota.especie();
        this.raza = datosRegistroMascota.raza();
        this.color = datosRegistroMascota.color();
        this.edad = datosRegistroMascota.edad();
        this.sexo = datosRegistroMascota.sexo();
    }

    public void actualizarDatos (DatosActualizarMascota datosActualizarMascota) {
        if (datosActualizarMascota.nombre() !=null) {
            this.nombre = datosActualizarMascota.nombre();
        }
    }

    public void desactivarMascota() {
        this.activo = false;
    }

}
