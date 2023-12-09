package pet.api.domain.mascota;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
    private String apellido;
    private String edad;
    private String sexo;

    private Boolean activo;
    @Enumerated(EnumType.STRING)
    private Especie especie;

    public Mascota(DatosRegistroMascota datosRegistroMascota) {
        this.activo = true;
        this.nombre = datosRegistroMascota.nombre();
        this.apellido = datosRegistroMascota.apellido();
        this.edad = datosRegistroMascota.edad();
        this.sexo = datosRegistroMascota.sexo();
        this.especie = datosRegistroMascota.especie();
    }

    public void actualizarDatos (DatosActualizarMascota datosActualizarMascota) {
        if (datosActualizarMascota.nombre() !=null) {
            this.nombre = datosActualizarMascota.nombre();
        }
        if (datosActualizarMascota.apellido() !=null) {
            this.nombre = datosActualizarMascota.apellido();
        }
    }

    public void desactivarMascota() {
        this.activo = false;
    }

}
