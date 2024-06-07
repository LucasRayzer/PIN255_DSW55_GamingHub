package springboot.back.Controle;

import jakarta.validation.Valid;
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
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/jogo")
public class JogoController {
    /*private JogoRepository jogoRepository;
    private UsuarioRepository usuarioRepository;

    public JogoController(JogoRepository jogoRepository, UsuarioRepository usuarioRepository) {
        this.jogoRepository = jogoRepository;
        this.usuarioRepository = usuarioRepository;
    }
    @GetMapping("/all")
    public List<Jogo> getAllJogo(){
        return jogoRepository.findAll();
    }
    @GetMapping("/{id}")
    public Jogo getJogoById(@PathVariable int id){
        return jogoRepository.findById(id).get();
    }
    @PostMapping("/create")
    public ResponseEntity<Jogo> createJogo(@Valid @RequestBody Jogo jogo){
        Jogo savedJogo = jogoRepository.save(jogo);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedJogo.getIdJogo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    //POST /api/jogo/associar?jogoId=1&userId=2
    @PostMapping("/associar")
    public ResponseEntity<Jogo> associarJogoUsuario(@RequestParam int jogoId, @RequestParam int userId){
        Jogo jogo = jogoRepository.findById(jogoId).get();
        Usuario usuario = usuarioRepository.findById(userId).get();
        jogo.setUsuario(usuario);
        jogoRepository.save(jogo);
        return ResponseEntity.ok(jogo);
    }
    @GetMapping("/{id}/conquistas")
    public List<Conquista> listarConquistasJogo(@PathVariable int id){
        Optional<Jogo> jogo = jogoRepository.findById(id);
        return jogo.get().getConquistasJogo();
    }*/
}
