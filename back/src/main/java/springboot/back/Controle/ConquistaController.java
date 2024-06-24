package springboot.back.Controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/conquista")
public class ConquistaController {
    @Autowired
    private ConquistaRepository conquistaRepository;
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
}
