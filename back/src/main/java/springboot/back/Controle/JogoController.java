package springboot.back.Controle;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Trofeu;
import springboot.back.Modelo.Usuario;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;
import springboot.back.Repositorio.UsuarioRepository;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jogo")
public class JogoController {
    @Autowired
    private JogoRepository jogoRepository;

    @GetMapping("/all")
    public List<Jogo> getAllJogo(){
        List<Jogo> temp = new ArrayList<>();
        jogoRepository.findAll().forEach(jogo -> {
            jogo.setUsuarioJogos(null);
            jogo.setTrofeu(null);
            jogo.setConquistasJogo(null);
            temp.add(jogo);
        });
        return temp;
    }
    @GetMapping("/{id}")
    public Jogo getJogoById(@PathVariable int id)throws Exception{
        if(jogoRepository.existsById(id)) {
            Jogo temp = jogoRepository.findById(id).get();
            temp.setUsuarioJogos(null);
            temp.setTrofeu(null);
            temp.setConquistasJogo(null);
            return temp;
        } else
            throw new Exception("Não foi possível encontrar o jogo");
    }
    @GetMapping("/{id}/conquistas")
    public List<Conquista> listarConquistasJogo(@PathVariable int id)throws Exception{
        if(jogoRepository.existsById(id)){
            Jogo jogo = jogoRepository.findById(id).get();
            List<Conquista> conquistas = jogo.getConquistasJogo();
            for(Conquista c : conquistas){
                c.setJogo(null);
            }
            return conquistas;
        }
        else
            throw new Exception("Não foi possível encontrar o jogo");
    }
    @GetMapping("/{id}/trofeu")
    public Trofeu listarTrofeuJogo(@PathVariable int id)throws Exception{
        if(jogoRepository.existsById(id)){
            Jogo jogo = jogoRepository.findById(id).get();
            Trofeu trofeu = jogo.getTrofeu();
            trofeu.setJogo(null);
            return trofeu;
        }
        else
            throw new Exception("Não foi possível encontrar o jogo");
    }
    @GetMapping("/appId/{appId}")
    public Jogo getJogoByAppId(@PathVariable int appId)throws Exception{
        Jogo temp = jogoRepository.findByAppId(appId);
        if(temp!=null) {
            temp.setUsuarioJogos(null);
            temp.setTrofeu(null);
            temp.setConquistasJogo(null);
            return temp;
        } else
            throw new Exception("Não foi possível encontrar o jogo");
    }
    @GetMapping("/appId/{appId}/conquistas")
    public List<Conquista> listarConquistasJogoByAppId(@PathVariable int appId)throws Exception{
        Jogo temp = jogoRepository.findByAppId(appId);
        if(temp!=null) {
            List<Conquista> conquistas = temp.getConquistasJogo();
            for(Conquista c : conquistas){
                c.setJogo(null);
            }
            return conquistas;
        }
        else
            throw new Exception("Não foi possível encontrar o jogo");
    }
    @GetMapping("/appId/{appId}/trofeu")
    public Trofeu listarTrofeuJogoByAppId(@PathVariable int appId)throws Exception{
        Jogo temp = jogoRepository.findByAppId(appId);
        if(temp!=null) {
            Trofeu trofeu = temp.getTrofeu();
            trofeu.setJogo(null);
            return trofeu;
        }
        else
            throw new Exception("Não foi possível encontrar o jogo");
    }
    @GetMapping("/nome/{nome}")
    public Jogo listarJogoByNome(@PathVariable String nome)throws Exception{
        Jogo temp = jogoRepository.findByNome(nome);
        if(temp!=null) {
            temp.setUsuarioJogos(null);
            temp.setConquistasJogo(null);
            temp.setTrofeu(null);
            return temp;
        }
        else
            throw new Exception("Não foi possível encontrar o jogo");
    }
    @GetMapping("/{id}/notaJogo/{nota}")
    public int setNotaJogo(@PathVariable int id, @PathVariable int nota){
        Jogo jogo = jogoRepository.findById(id).get();
        jogo.setNotaJogo(nota);
        jogoRepository.save(jogo);
        return jogo.getNotaJogo();
    }
    @GetMapping("/{nome}/jogoFavorito")
    public boolean setJogoFavorito(@PathVariable String nome) {
        Jogo jogo = jogoRepository.findByNome(nome);
        if (jogo.getJogoFavorito())
            jogo.setJogoFavorito(false);
        else
            jogo.setJogoFavorito(true);
        jogoRepository.save(jogo);
        return jogo.getJogoFavorito();
    }

}
