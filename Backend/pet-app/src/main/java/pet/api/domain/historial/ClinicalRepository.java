package pet.api.domain.historial;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicalRepository extends JpaRepository
        <ClinicalHistory, Long> {
}
