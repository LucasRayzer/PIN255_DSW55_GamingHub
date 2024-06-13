package springboot.back.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private ApiService apiService;
    @Autowired
    private ConquistaRepository conquistaRepository;
    @Autowired
    private JogoRepository jogoRepository;

    // 76561198973296498
    // 1091500
    // 1262350
    /*DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;*/
    //http://localhost:8080/api/playerGames/76561198973296498
    //http://localhost:8080/api/games
    //http://localhost:8080/api/playerAchievements/76561198973296498/1091500
    //http://localhost:8080/api/achievements
    //http://localhost:8080/jogo/associar
    //http://localhost:8080/jogo/38
    //http://localhost:8080/jogo/38/conquistas
    //http://localhost:8080/api/playerAchievements/76561198973296498/1262350
    //http://localhost:8080/jogo/45/conquistas
    //http://localhost:8080/user/associar

    @GetMapping("/steamplayer/{steamId}")
    public Mono<ApiResponse> getSteamPlayerProfile(@PathVariable String steamId) {
        return apiService.getSteamPlayerProfile(steamId);
    }
    @GetMapping("/playerGames/{steamId}")
    public Mono<JogosUsuarioResponse> getOwnedGames(@PathVariable String steamId) {
        return apiService.getOwnedGames(steamId);
    }
    @GetMapping("/games")
    public List<Jogo> getAllGames(){
        return jogoRepository.findAll();
    }
    @GetMapping("/playerAchievements/{steamId}/{appId}")
    public Mono<ConquistaResponse> getPlayerAchievements(@PathVariable String steamId, @PathVariable int appId) {
        return apiService.getPlayerAchievements(steamId, appId);
    }
    @GetMapping("/achievements")
    public List<Conquista> getAllAchievements(){
        return conquistaRepository.findAll();
    }
    @GetMapping("/setConquistas")
    public void setarConquistas(){
        for(int i =1;i<= jogoRepository.count();i++) {
            int count = 0;
            if (jogoRepository.existsById(i)) {
                Jogo jogo = jogoRepository.findById(i).get();
                List<Conquista> temp = conquistaRepository.findByAppId(jogo.getAppId());
                for(Conquista c: temp){
                    count++;
                    jogo.addConquistasJogo(c);
                    c.setJogo(jogo);
                    conquistaRepository.save(c);
                }
                jogo.setN_conquistas(count);
                jogo.conquistasFinalizadas(conquistaRepository.findAll());
                jogoRepository.save(jogo);
            }
        }
    }
    @GetMapping("/deleteEmpty")
    public void deleteEmpty(){
        List<Integer> ids = new ArrayList<>();
        for(int i =1;i<= jogoRepository.count();i++) {
            Jogo jogo = jogoRepository.findById(i).get();
            if(jogo.getNome()==null||jogo.getNome().isEmpty())
                ids.add(jogo.getJogoId());
        }
        jogoRepository.deleteAllById(ids);
    }
}
