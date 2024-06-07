package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.Acesso;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Usuario;
import springboot.back.Repositorio.AcessoRepository;
import springboot.back.Repositorio.UsuarioRepository;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UsuarioController {
   /*private UsuarioRepository usuarioRepository;
    private AcessoRepository acessoRepository;

    public UsuarioController(UsuarioRepository usuarioRepository, AcessoRepository acessoRepository) {
        this.usuarioRepository = usuarioRepository;
        this.acessoRepository = acessoRepository;
    }

    @GetMapping("/all")
    public List<Usuario> getAllUsuarios(){
        return usuarioRepository.findAll();
    }
    @GetMapping("/{id}")
    public Usuario findusuarioById(@PathVariable int id){
        return usuarioRepository.findById(id).get();
    }
    @PostMapping("/create")
    public ResponseEntity<Usuario> createUsuario(@Valid @RequestBody Usuario usuario){
        Usuario savedUsuario = usuarioRepository.save(usuario);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedUsuario.getIdUsuario())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    //POST /api/user/associar?acessoId=1&jogoId=2
    @PostMapping("/associar")
    public ResponseEntity<Acesso> associarUsuarioAcesso(@RequestParam int acessoId, @RequestParam int userId){
        Acesso acesso = acessoRepository.findById(acessoId).get();
        Usuario user = usuarioRepository.findById(userId).get();
        acesso.setUsuario(user);
        acessoRepository.save(acesso);
        return ResponseEntity.ok(acesso);
    }
    @GetMapping("/{id}/jogo")
    public List<Jogo> getJogoUsuario(@PathVariable int id){
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        return usuario.get().getBiblioteca();
    }
    @GetMapping("/{id}/acesso")
    public Acesso getAcessoUsuario(@PathVariable int id){
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        return usuario.get().getAcesso();
    }*/
}
