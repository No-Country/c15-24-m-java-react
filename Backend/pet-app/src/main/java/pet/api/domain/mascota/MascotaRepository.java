package pet.api.domain.mascota;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MascotaRepository extends JpaRepository<Mascota, Long> {
    Page<Mascota> findByActivoTrue(Pageable pageable);
}
