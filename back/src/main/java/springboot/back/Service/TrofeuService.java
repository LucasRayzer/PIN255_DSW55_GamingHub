package springboot.back.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.back.Modelo.Trofeu;
import springboot.back.Repositorio.TrofeuRepository;

@Service
public class TrofeuService {
    private final TrofeuRepository trofeuRepository;
    @Autowired
    public TrofeuService(TrofeuRepository trofeuRepository) {
        this.trofeuRepository = trofeuRepository;
    }
    public Trofeu findByAppId(int appId){
        return trofeuRepository.findByAppId(appId);
    }
}
