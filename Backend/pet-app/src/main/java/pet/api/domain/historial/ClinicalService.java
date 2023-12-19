package pet.api.domain.historial;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ClinicalService {

    @Autowired
    private ClinicalRepository clinicalRepository;

    @Transactional
    public ClinicalHistory savedClinical(ClinicalHistory clinicalHistory) throws Exception{
        try {
            clinicalHistory.setFechaCreacion(new Date());
            return clinicalRepository.save(clinicalHistory);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public ClinicalHistory updateClinical(Long id, ClinicalHistory clinicalHistory) throws Exception {
        try{
            ClinicalHistory historyById = clinicalRepository
                    .findById(id)
                    .orElseThrow(()->new Exception(
                            "ClinicalHistory with id " + id + "not found"));
            Date fechaOriginal = historyById.getFechaCreacion();
            historyById.setAlergias(clinicalHistory.getAlergias());
            historyById.setAlimentacion(clinicalHistory.getAlimentacion());
            historyById.setTratamiento(clinicalHistory.getTratamiento());
            historyById.setEsterilizado(clinicalHistory.getEsterilizado());
            historyById.setFechaCreacion(fechaOriginal);
            return clinicalRepository.save(historyById);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public Optional<ClinicalHistory> findById(Long id) throws Exception{
        try {
            return clinicalRepository.findById(id);
        }catch (Exception e){
            throw new Exception(
                    "Error trying to retrieve the clinicalHistory by ID: "
                            + id + ". " + e.getMessage());
        }
    }

    public List<ClinicalHistory> findAllClinicalHistory() throws Exception{
        try {
            return clinicalRepository.findAll();
        }catch (Exception e){
            throw new Exception(
                    "Error trying to retrieve all clinicalHistory: "
                            + e.getMessage());
        }
    }
}
