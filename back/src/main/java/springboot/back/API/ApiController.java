package springboot.back.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private ApiService apiService;
    @Autowired
    private GameRepository gameRepository;

    @GetMapping("/steamplayer/{steamId}")
    public Mono<ApiResponse> getSteamPlayerProfile(@PathVariable String steamId) {
        return apiService.getSteamPlayerProfile(steamId);
    }
    /*@GetMapping("/playerGames/{steamId}")
    public Mono<OwnedGameResponse> getOwnedGames(@PathVariable String steamId){
        return apiService.getOwnedGames(steamId)
                .doOnNext(response -> apiService.saveGames(response.getResponse().getGames()));
    }*/
    @GetMapping("/games")
    public List<GameEntity> getAll(){
        return gameRepository.findAll();
    }
    @GetMapping("/playerGames/{steamId}")
    public Mono<OwnedGameResponse> getOwnedGames(@PathVariable String steamId) {
        return apiService.getOwnedGames(steamId)
                .doOnNext(response -> {
                    if (response.getResponse() != null) {
                        apiService.saveGames(response.getResponse().getGames());
                    }
                });
    }

}
