package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.*;
import springboot.back.Repositorio.AcessoRepository;
import springboot.back.Repositorio.JogoRepository;
import springboot.back.Repositorio.UsuarioJogoRepository;
import springboot.back.Repositorio.UsuarioRepository;
import springboot.back.Service.UsuarioService;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/user")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private AcessoRepository acessoRepository;
    @Autowired
    private JogoRepository jogoRepository;
    @Autowired
    private UsuarioJogoRepository usuarioJogoRepository;
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/all")
    public List<Usuario> getAllUsuarios(){
        return usuarioRepository.findAll();
    }
    @GetMapping("/{id}")
    public Usuario findusuarioById(@PathVariable int id)throws Exception{
        if(usuarioRepository.existsById(id)){
            Usuario usuario = usuarioRepository.findById(id).get();
            usuario.setUsuarioJogos(null);
            Acesso acesso = new Acesso();
            acesso.setUsuario(usuario);
            acesso.setNomeUsuario(usuario.getNomeUsuario());
            acessoRepository.save(acesso);
            return usuario;
        }
        else
            throw new Exception("Não foi possível encontrar o usuário");
    }
    @PostMapping("/create")
    public ResponseEntity<Usuario> createUsuario(@Valid @RequestBody Usuario usuario){
        Usuario savedUsuario = usuarioRepository.save(usuario);
        Acesso acesso = new Acesso();
        acesso.setUsuario(savedUsuario);
        acesso.setNomeUsuario(savedUsuario.getNomeUsuario());
        acessoRepository.save(acesso);
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
    @GetMapping("steamId/{steamId}")
    public Usuario findUsuarioBySteamId(@PathVariable String steamId)throws Exception{
        Usuario usuario = usuarioService.findBySteamId(steamId);
        if(usuario!=null){
            usuario.setUsuarioJogos(null);
            return usuario;
        }
        else
            throw new Exception("Não foi possível encontrar o usuário");
    }
    @GetMapping("/associar")
    public List<Usuario> associarJogoUsuario(){
        UsuarioJogo usuarioJogo = new UsuarioJogo();
        usuarioRepository.findAll().forEach(usuario -> {
            jogoRepository.findAll().forEach(jogo -> {
                if(jogo.getSteamId().equals(usuario.getSteamId())){
                    UsuarioJogoId usuarioJogoId = new UsuarioJogoId(usuario.getUsuarioId(), jogo.getJogoId());
                    usuarioJogo.setId(usuarioJogoId);
                    usuarioJogo.setUsuario(usuario);
                    usuarioJogo.setJogo(jogo);
                    usuarioJogoRepository.save(usuarioJogo);
                }
            });
            usuarioRepository.save(usuario);
        });
        return usuarioRepository.findAll();
    }
    @GetMapping("/{usuarioId}/jogos")
    public ResponseEntity<List<Jogo>> getJogosByUsuarioId(@PathVariable int usuarioId) {
        List<Jogo> jogos = usuarioService.getJogosByUsuarioId(usuarioId);
        List<Jogo> temp = new ArrayList<>();
        for(Jogo j : jogos){
            j.setTrofeu(null);
            j.setConquistasJogo(null);
            j.setUsuarioJogos(null);
            temp.add(j);
        }
        return ResponseEntity.ok(temp);
    }
    @GetMapping("/steamId/{steamId}/jogos")
    public ResponseEntity<List<Jogo>> getJogosBySteamId(@PathVariable String steamId) {
        List<Jogo> jogos = usuarioService.getJogosBySteamId(steamId);
        List<Jogo> temp = new ArrayList<>();
        for(Jogo j : jogos){
            j.setTrofeu(null);
            j.setConquistasJogo(null);
            j.setUsuarioJogos(null);
            temp.add(j);
        }
        return ResponseEntity.ok(temp);
    }
    @PutMapping("/{usuarioId}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable int usuarioId, @RequestBody Usuario usuarioDetails) {
        Usuario temp = usuarioRepository.findById(usuarioId).get();
        temp.setNomeUsuario(usuarioDetails.getNomeUsuario());
        temp.setApelido(usuarioDetails.getApelido());
        temp.setSenha(usuarioDetails.getSenha());
        temp.setSteamId(usuarioDetails.getSteamId());
        usuarioRepository.save(temp);
        return ResponseEntity.ok(temp);
    }
    @GetMapping("/{id}/acessos")
    public List<Acesso> getAcessoUsuario(@PathVariable int id){
        Usuario usuario = usuarioRepository.findById(id).get();
        List<Acesso> temp = new ArrayList<>();
        acessoRepository.findAll().forEach(acesso -> {
            if(acesso.getNomeUsuario().equals(usuario.getNomeUsuario()))
                temp.add(acesso);
        });
        return temp;
    }
    @GetMapping("/nome/{username}")
    public Usuario getUserByName(@PathVariable String username) throws Exception{
        Usuario usuario = usuarioRepository.findByNomeUsuario(username);
        usuario.setAcessos(null);
        if(usuario!=null)
            return usuario;
        else
            throw new Exception("Usuario não foi encontrado");
    }
    @GetMapping("/nome/{username}/senha/{senha}")
    public String setSenhaByNome(@PathVariable String username, @PathVariable String senha){
        Usuario usuario = usuarioRepository.findByNomeUsuario(username);
        usuario.setSenha(senha);
        usuarioRepository.save(usuario);
        return usuario.getSenha();
    }
    @GetMapping("/nome/{username}/apelido/{apelido}")
    public String setApelidoByNome(@PathVariable String username, @PathVariable String apelido){
        Usuario usuario = usuarioRepository.findByNomeUsuario(username);
        usuario.setApelido(apelido);
        usuarioRepository.save(usuario);
        return usuario.getApelido();
    }
    @GetMapping("/{id}/ranking")
    public AtomicInteger rankingUser(@PathVariable int id){
        AtomicInteger rank = new AtomicInteger();
        usuarioJogoRepository.findAll().forEach(usuarioJogo -> {
            if(usuarioJogo.getUsuario().getUsuarioId()==id){
                Jogo jogo = jogoRepository.findById(usuarioJogo.getJogo().getJogoId()).get();
                Trofeu trofeu = jogo.getTrofeu();
                if(trofeu.getTrofeuOuro())
                    rank.addAndGet(2);
                if(trofeu.getTrofeuPrata())
                    rank.getAndIncrement();
            }
        });
        return rank;
    }
//    @DeleteMapping("/{id}")
//    public Usuario deleteUser(@PathVariable int id){
//        Usuario usuario = usuarioRepository.findById(id).get();
//        int acessoId = acessoRepository.findByUsuario(usuario).getId();
//        acessoRepository.deleteById(acessoId);
//        usuarioRepository.deleteById(id);
//        return usuario;
//    }

}
