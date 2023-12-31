package pet.api.domain.calendario;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CalendarRepository extends JpaRepository
        <Calendar, Long> {
    List<Calendar> findByMascotaId(Long id);
}
