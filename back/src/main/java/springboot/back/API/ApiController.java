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
}
