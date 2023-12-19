package pet.api.domain.mascota;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import pet.api.domain.calendario.Calendar;
import pet.api.domain.historial.ClinicalHistory;

import java.util.List;

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

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "ficha_id")
    private ClinicalHistory clinicalHistory;

    @OneToMany(mappedBy = "mascota", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Calendar> calendars;

    private Boolean activo;

    public Mascota(DatosRegistroMascota datosRegistroMascota) {
        this.nombre = datosRegistroMascota.nombre();
        this.especie = datosRegistroMascota.especie();
        this.raza = datosRegistroMascota.raza();
        this.color = datosRegistroMascota.color();
        this.edad = datosRegistroMascota.edad();
        this.sexo = datosRegistroMascota.sexo();
        this.clinicalHistory = datosRegistroMascota.clinicalHistory();
        this.activo = true;
    }

    public void actualizarDatos (DatosActualizarMascota datosActualizarMascota) {
        if (datosActualizarMascota.nombre() !=null) {
            this.nombre = datosActualizarMascota.nombre();
            this.clinicalHistory = datosActualizarMascota.clinicalHistory();
        }
    }

    public void desactivarMascota() {
        this.activo = false;
    }

}
