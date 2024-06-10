package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Usuario;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;
import springboot.back.Repositorio.UsuarioRepository;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jogo")
public class JogoController {
    @Autowired
    private JogoRepository jogoRepository;
    @Autowired
    private ConquistaRepository conquistaRepository;

    @GetMapping("/all")
    public List<Jogo> getAllJogo(){
        return jogoRepository.findAll();
    }
    @GetMapping("/{id}")
    public Jogo getJogoById(@PathVariable int id){
        return jogoRepository.findById(id).get();
    }

    //seta SteamId do usuário no jogo
    @GetMapping("/associar")
    public List<Jogo> associarSteamId(){
        for(int i=1;i<= jogoRepository.count();i++){
            Jogo jogo = jogoRepository.findById(i).get();
            for (int j=1;j<=conquistaRepository.count();j++) {
                Conquista conquista = conquistaRepository.findById(j).get();
                if(jogo.getAppId()==conquista.getAppId()) {
                    jogo.setSteamId(conquista.getSteamId());
                    jogoRepository.save(jogo);
                    break;
                }
            }
        }
        return jogoRepository.findAll();
    }

    //pega as conquistas do jogo especificado. também calcula as conquistas que foram concluídas(temporário)
    @GetMapping("/{id}/conquistas")
    public List<Conquista> listarConquistasJogo(@PathVariable int id){
        List<Conquista> temp= new ArrayList<>();
        Jogo jogo = jogoRepository.findById(id).get();
        for(int i=1;i<=conquistaRepository.count();i++){
            Conquista conquista = conquistaRepository.findById(i).get();
            if(conquista.getAppId()==jogo.getAppId())
                temp.add(conquista);
        }
        jogoRepository.save(jogo.conquistasFinalizadas(conquistaRepository.findAll()));
        return temp;
    }
}
