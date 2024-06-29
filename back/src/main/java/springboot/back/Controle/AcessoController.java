package springboot.back.Controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springboot.back.Modelo.Acesso;
import springboot.back.Modelo.Usuario;
import springboot.back.Repositorio.AcessoRepository;
import springboot.back.Repositorio.UsuarioRepository;

import java.util.List;

@RestController
@RequestMapping("/acesso")
public class AcessoController {
    @Autowired
    private AcessoRepository acessoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/all")
    public List<Acesso> getAll(){
        return acessoRepository.findAll();
    }
    @GetMapping("/{id}")
    public Acesso acessoById(@PathVariable int id){
        return acessoRepository.findById(id).get();
    }
    @GetMapping("/current/{nomeUsuario}")
    public Acesso loginAtual(@PathVariable String nomeUsuario){
        Usuario usuario = usuarioRepository.findByNomeUsuario(nomeUsuario);
        Acesso acesso = new Acesso();
        acesso.setUsuario(usuario);
        acesso.setNomeUsuario(nomeUsuario);
        acessoRepository.save(acesso);
        return acesso;
    }
    @GetMapping("/user/{nomeUsuario}")
    public List<Acesso> loginUser(@PathVariable String nomeUsuario){
        Usuario usuario = usuarioRepository.findByNomeUsuario(nomeUsuario);
        List<Acesso> acesso= acessoRepository.findByUsuario(usuario);
        for(Acesso acesso1 : acesso){
            acesso1.setUsuario(null);
        }
        return acesso;
    }
}
