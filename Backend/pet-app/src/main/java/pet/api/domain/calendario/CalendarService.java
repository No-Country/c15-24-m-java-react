package pet.api.domain.calendario;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CalendarService {

    @Autowired
    private CalendarRepository calendarRepository;


    @Transactional
    public Calendar savedCalendar(Calendar calendar) throws Exception{
        try {
//            calendar.setDate(new Date());

            return calendarRepository.save(calendar);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public Calendar updateCalendar(Long id, Calendar calendar) throws Exception{
        try {
            Calendar calendarById = calendarRepository.findById(id).orElseThrow(()->new Exception("Calendar with id " + id + "not found"));
            calendarById.setDate(calendar.getDate());
            calendarById.setChecked(calendar.isChecked());
            calendarById.setTask(calendar.getTask());
            return calendarRepository.save(calendarById);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public void deleteCalendar(Long id) throws Exception {
        try {
            Optional<Calendar> calendarOptional = calendarRepository.findById(id);

            if (calendarOptional.isPresent()) {
                Calendar calendarById = calendarOptional.get();
                calendarRepository.delete(calendarById);
            } else {
                throw new Exception("Calendar with id " + id + " not found");
            }
        } catch (Exception e) {
            throw new Exception("Failed to delete calendar: " + e.getMessage());
        }
    }

    /*
    Te permite obtener todos las fechas o calendarios de una mascota especifica
     */
    @Transactional
    public List<Calendar> findCalendarsByMascotaId(Long id) throws Exception {
        try {
            return calendarRepository.findByMascotaId(id);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public Optional<Calendar> findById (Long id) throws Exception {
        try {
            return calendarRepository.findById(id);
        }catch (Exception e){
            throw new Exception("Error trying to retrieve the calendar by ID: " + id + ". " + e.getMessage());
        }
    }

    public List<Calendar> findAllCalendars () throws Exception {
        try {
            return calendarRepository.findAll();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
