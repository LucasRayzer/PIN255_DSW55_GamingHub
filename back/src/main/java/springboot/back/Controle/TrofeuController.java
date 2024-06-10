package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Trofeu;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;
import springboot.back.Repositorio.TrofeuRepository;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/trofeu")
public class TrofeuController {
    @Autowired
    private TrofeuRepository trofeuRepository;
    @Autowired
    private JogoRepository jogoRepository;
    @Autowired
    private ConquistaRepository conquistaRepository;

    @GetMapping("/all")
    public List<Trofeu> getAllTrofeus(){
        return trofeuRepository.findAll();
    }
    @GetMapping("/{id}")
    public Trofeu getTrofeuById(@PathVariable int id){
        return trofeuRepository.findById(id).get();
    }
    @PostMapping("/create")
    public ResponseEntity<Trofeu> createTrofeu(@Valid @RequestBody Trofeu trofeu){
        Trofeu savedTrofeu = trofeuRepository.save(trofeu);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedTrofeu.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    //calcula se o jogo tem todas as conquistas concluidas e adiciona o troféu
    @GetMapping("/associar")
    public List<Trofeu> associarTrofeuComConquista(){
        for(int i=1;i<= jogoRepository.count();i++){
            Jogo jogo = jogoRepository.findById(i).get();
            Trofeu trofeu = new Trofeu();
            trofeu.setAppId(jogo.getAppId());
            if (jogo.getF_conquistas() == jogo.getN_conquistas() && trofeu.getTrofeuPrata() == null&&jogo.getN_conquistas()>0) {

                trofeu.setTrofeuPrata(true);
            }
            trofeuRepository.save(trofeu);

        }
        return trofeuRepository.findAll();
    }
}
