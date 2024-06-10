package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.Acesso;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Usuario;
import springboot.back.Repositorio.AcessoRepository;
import springboot.back.Repositorio.JogoRepository;
import springboot.back.Repositorio.UsuarioRepository;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private AcessoRepository acessoRepository;
    @Autowired
    private JogoRepository jogoRepository;

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
                .buildAndExpand(savedUsuario.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/{id}/{steamId}")
    public Usuario setSteamId(@PathVariable int id, @PathVariable String steamId){
        Usuario user = usuarioRepository.findById(id).get();
        user.setSteamId(steamId);
        usuarioRepository.save(user);
        return user;
    }
//    @GetMapping("/associar")
//    public List<Usuario> associarJogoUsuario(){
//        for(int i=1;i<=usuarioRepository.count();i++){
//            Usuario user = usuarioRepository.findById(i).get();
//            for(int j=1;j<=jogoRepository.count();j++){
//                Jogo jogo=jogoRepository.findById(j).get();
//                if(user.getSteamId()!=null)
//                    if(user.getSteamId().equals(jogo.getSteamId())){
//                        user.adicionarJogo(jogo);
//                    }
//            }
//           usuarioRepository.save(user);
//        }
//        return usuarioRepository.findAll();
//    }
//    @GetMapping("/{id}/jogo")
//    public List<Jogo> getJogoUsuario(@PathVariable int id){
//        Optional<Usuario> usuario = usuarioRepository.findById(id);
//        return usuario.get().getBiblioteca();
//    }
//    @GetMapping("/{id}/acesso")
//    public Acesso getAcessoUsuario(@PathVariable int id){
//        Optional<Usuario> usuario = usuarioRepository.findById(id);
//        return usuario.get().getAcesso();
//    }
}
