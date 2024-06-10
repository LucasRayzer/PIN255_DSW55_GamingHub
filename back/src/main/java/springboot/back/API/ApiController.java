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
//    DROP SCHEMA public CASCADE;
//    CREATE SCHEMA public;
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
        //adiciona o numero de conquistas aos jogos(temporário)
        for(int i=1;i<=jogoRepository.count();i++){
            Jogo jogo=jogoRepository.findById(i).get();
            int count=0;
            for(int j=1;j<=conquistaRepository.count();j++){
                Conquista conquista = conquistaRepository.findById(j).get();
                if(jogo.getAppId()==conquista.getAppId())
                    count++;
            }
            jogo.setN_conquistas(count);
            jogoRepository.save(jogo);
        }
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
}
