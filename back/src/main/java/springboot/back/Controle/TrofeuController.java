package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Trofeu;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.TrofeuRepository;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/trofeu")
public class TrofeuController {
    private TrofeuRepository trofeuRepository;
    private ConquistaRepository conquistaRepository;

    public TrofeuController(TrofeuRepository trofeuRepository, ConquistaRepository conquistaRepository) {
        this.trofeuRepository = trofeuRepository;
        this.conquistaRepository=conquistaRepository;
    }
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
    //POST /api/trofeu/associar?trofeuId=1&conquistaId=2
   /* @PostMapping("/associar")
    public ResponseEntity<Trofeu> associarTrofeuComConquista(@RequestParam int trofeuId, @RequestParam int conquistaId){
        Trofeu trofeu = trofeuRepository.findById(trofeuId).get();
        Conquista conquista = conquistaRepository.findById(conquistaId).get();
        trofeu.setConquista(conquista);
        trofeuRepository.save(trofeu);
        return ResponseEntity.ok(trofeu);
    }*/
}
