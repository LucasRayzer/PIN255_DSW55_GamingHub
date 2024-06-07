package springboot.back.Controle;

import jakarta.validation.Valid;
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
import java.util.Optional;

@RestController
@RequestMapping("/api/conquista")
public class ConquistaController {
    /*private ConquistaRepository conquistaRepository;
    private JogoRepository jogoRepository;

    public ConquistaController(ConquistaRepository conquistaRepository, JogoRepository jogoRepository, TrofeuRepository trofeuRepository) {
        this.conquistaRepository = conquistaRepository;
        this.jogoRepository = jogoRepository;
    }
    @GetMapping("/all")
    public List<Conquista> getAllConquista(){
        return conquistaRepository.findAll();
    }
    @GetMapping("/{id}")
    public Conquista getConquistaById(@PathVariable int id){
        return conquistaRepository.findById(id).get();
    }
    @PostMapping("/create")
    public ResponseEntity<Conquista> createConquista(@Valid @RequestBody Conquista conquista){
        Conquista savedConquista = conquistaRepository.save(conquista);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedConquista.getIdConquista())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    //POST /api/conquista/associar?conquistaId=1&jogoId=2
    @PostMapping("/associar")
    public ResponseEntity<Conquista> associarConquistaJogo(@RequestParam int conquistaId, @RequestParam int jogoId){
        Conquista conquista = conquistaRepository.findById(conquistaId).get();
        Jogo jogo = jogoRepository.findById(jogoId).get();
        conquista.setJogo(jogo);
        conquistaRepository.save(conquista);
        return ResponseEntity.ok(conquista);
    }
    @GetMapping("/{id}/trofeu")
    public List<Trofeu> listarTrofeusConquista(@PathVariable int id){
        Optional<Conquista> conquista = conquistaRepository.findById(id);
        return conquista.get().getTrofeusFinalizados();
    }*/
}
