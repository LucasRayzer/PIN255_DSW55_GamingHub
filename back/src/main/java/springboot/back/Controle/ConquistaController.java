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
import java.util.Optional;

@RestController
@RequestMapping("/conquista")
public class ConquistaController {
    @Autowired
    private ConquistaRepository conquistaRepository;
    @Autowired
    private JogoRepository jogoRepository;

    @GetMapping("/all")
    public List<Conquista> getAllConquista(){
        return conquistaRepository.findAll();
    }
    @GetMapping("/{id}")
    public Conquista getConquistaById(@PathVariable int id){
        return conquistaRepository.findById(id).get();
    }

//    @PostMapping("/create")
//    public ResponseEntity<Conquista> createConquista(@Valid @RequestBody Conquista conquista){
//        Conquista savedConquista = conquistaRepository.save(conquista);
//        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
//                .path("/{id}")
//                .buildAndExpand(savedConquista.getIdConquista())
//                .toUri();
//        return ResponseEntity.created(location).build();
//    }
//    //POST /api/conquista/associar?conquistaId=1&jogoId=2
//    @PostMapping("/associar")
//    public ResponseEntity<Conquista> associarConquistaJogo(@RequestParam int conquistaId, @RequestParam int jogoId){
//        Conquista conquista = conquistaRepository.findById(conquistaId).get();
//        Jogo jogo = jogoRepository.findById(jogoId).get();
//        conquista.setJogo(jogo);
//        conquistaRepository.save(conquista);
//        return ResponseEntity.ok(conquista);
//    }
//    @GetMapping("/associate")
//    public List<Conquista> associarConquista(){
//        for(int i=1;i<conquistaRepository.count()+1;i++){
//            Conquista conquista= conquistaRepository.findById(i).get();
//            for(int j=1;j< jogoRepository.count()+1;j++){
//                Jogo jogo = jogoRepository.findById(j).get();
//                if(conquista.getAppId()== jogo.getAppId()){
//                    conquista.setJogo(jogo);
//                    conquistaRepository.save(conquista);
//                }
//            }
//        }
//        return conquistaRepository.findAll();
//    }
//    @GetMapping("/{id}/trofeu")
//    public List<Trofeu> listarTrofeusConquista(@PathVariable int id){
//        Optional<Conquista> conquista = conquistaRepository.findById(id);
//        return conquista.get().getTrofeusFinalizados();
//    }
}
