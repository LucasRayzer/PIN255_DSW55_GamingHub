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
import springboot.back.Service.ConquistaService;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/conquista")
public class ConquistaController {
    @Autowired
    private ConquistaRepository conquistaRepository;
    @Autowired
    private ConquistaService conquistaService;
    @Autowired
    private JogoRepository jogoRepository;
    @GetMapping("/all")
    public List<Conquista> getAllConquista(){
        List<Conquista> temp = conquistaRepository.findAll();
        conquistaRepository.findAll().forEach(conquista -> {
            conquista.setJogo(null);
            temp.add(conquista);
        });
        return temp;
    }
    @GetMapping("/{id}")
    public Conquista getConquistaById(@PathVariable int id) throws Exception{
        if(conquistaRepository.existsById(id)){
            Conquista conquista = conquistaRepository.findById(id).get();
            conquista.setJogo(null);
            return conquista;
        }
        else
            throw new Exception("Não foi possível encontrar a conquista");
    }
    @GetMapping("/appId/{appId}")
    public List<Conquista> getConquistaByAppId(@PathVariable int appId){
        List<Conquista> temp= new ArrayList<>();
        conquistaRepository.findByAppId(appId).forEach(conquista -> {
            conquista.setJogo(null);
            temp.add(conquista);
        });
        return temp;
    }
    @GetMapping("/jogo/{id}")
    public List<Conquista> getConquistaByJogo(@PathVariable int id){
        List<Conquista> temp= new ArrayList<>();
        Jogo jogo = jogoRepository.findById(id).get();
        conquistaRepository.findByJogo(jogo).forEach(conquista -> {
            conquista.setJogo(null);
            temp.add(conquista);
        });
        return temp;
    }
//    @GetMapping("/jogoNome/{nome}")
//    public List<Conquista> getConquistaByNomeJogo(@PathVariable String nome){
//        List<Conquista> temp= new ArrayList<>();
//        Jogo jogo = jogoRepository.findByNome(nome);
//        conquistaRepository.findByJogo(jogo).forEach(conquista -> {
//            conquista.setJogo(null);
//            temp.add(conquista);
//        });
//        return temp;
//    }
}
