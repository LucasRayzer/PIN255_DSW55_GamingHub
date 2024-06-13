package springboot.back.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.back.Modelo.Conquista;
import springboot.back.Repositorio.ConquistaRepository;

import java.util.List;

@Service
public class ConquistaService {
    private final ConquistaRepository conquistaRepository;

    @Autowired
    public ConquistaService(ConquistaRepository conquistaRepository) {
        this.conquistaRepository = conquistaRepository;
    }

    public List<Conquista> findByAppId(int appId) {
        return conquistaRepository.findByAppId(appId);
    }
}
