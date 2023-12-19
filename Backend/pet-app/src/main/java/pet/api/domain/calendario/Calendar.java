package pet.api.domain.calendario;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import pet.api.domain.mascota.Mascota;

import java.time.LocalDate;

@Table(name = "tareas")
@Entity(name = "Calendario")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tarea", nullable = false)
    @NotBlank
    private String task;
    @Column(name = "chequeado", nullable = false)
    @NotNull
    private boolean isChecked;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha", nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private LocalDate date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mascota_id")
    @JsonBackReference
    @NotNull
    private Mascota mascota;

}