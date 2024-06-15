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
import springboot.back.Service.TrofeuService;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/trofeu")
public class TrofeuController {
    @Autowired
    private TrofeuRepository trofeuRepository;
    @Autowired
    private TrofeuService trofeuService;
    @Autowired JogoRepository jogoRepository;
    @GetMapping("/all")
    public List<Trofeu> getAllTrofeus(){
        List<Trofeu> temp = new ArrayList<>();
        trofeuRepository.findAll().forEach(trofeu -> {
            trofeu.setJogo(null);
            temp.add(trofeu);
        });
        return temp;
    }
    @GetMapping("/{id}")
    public Trofeu getTrofeuById(@PathVariable int id) throws Exception{
        if(trofeuRepository.existsById(id)){
            Trofeu trofeu = trofeuRepository.findById(id).get();
            trofeu.setJogo(null);
            return trofeu;
        }
        else
            throw new Exception("Não foi possível localizar o troféu");
    }
    @GetMapping("/appId/{appId}")
    public Trofeu getTrofeuByAppId(@PathVariable int appId) throws Exception{
        Trofeu trofeu= trofeuRepository.findByAppId(appId);
        if(trofeu!=null){
            trofeu.setJogo(null);
            return trofeu;
        }
        else
            throw new Exception("Não foi possível localizar o troféu");
    }
    @GetMapping("/jogo/{id}")
    public Trofeu getTrofeuByJogo(@PathVariable int id) throws Exception{
        Jogo jogo = jogoRepository.findById(id).get();
        Trofeu trofeu= trofeuRepository.findByJogo(jogo);
        if(trofeu!=null){
            trofeu.setJogo(null);
            return trofeu;
        }
        else
            throw new Exception("Não foi possível localizar o troféu");
    }
    @GetMapping("/jogoNome/{nome}")
    public Trofeu getTrofeuByNomeJogo(@PathVariable String nome) throws Exception{
        Jogo jogo = jogoRepository.findByNome(nome);
        Trofeu trofeu= trofeuRepository.findByJogo(jogo);
        if(trofeu!=null){
            trofeu.setJogo(null);
            return trofeu;
        }
        else
            throw new Exception("Não foi possível localizar o troféu");
    }
}
