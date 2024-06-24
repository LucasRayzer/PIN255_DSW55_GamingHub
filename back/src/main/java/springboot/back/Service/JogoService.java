package springboot.back.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.back.Modelo.Jogo;
import springboot.back.Repositorio.JogoRepository;

import java.util.List;

@Service
public class JogoService {
    private final JogoRepository jogoRepository;

    @Autowired
    public JogoService(JogoRepository jogoRepository) {
        this.jogoRepository = jogoRepository;
    }
    public Jogo findByAppId(int appId){
        return jogoRepository.findByAppId(appId);
    }
}
