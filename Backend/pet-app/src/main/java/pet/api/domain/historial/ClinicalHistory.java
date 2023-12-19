package pet.api.domain.historial;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Table(name = "fichas_salud")
@Entity(name = "Ficha_Salud")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClinicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String alergias;
    private String alimentacion;
    private String tratamiento;
    private Boolean esterilizado;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_creacion")
    private Date fechaCreacion;
}
