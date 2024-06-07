package springboot.back.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ApiService {
    @Autowired
    private WebClient.Builder webClientBuilder;
    @Autowired
    private GameRepository gameRepository;

    public Mono<ApiResponse> getSteamPlayerProfile(String steamId) {
        String url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9D94F49413553413A449F22760F36A56&steamids=" + steamId;
        return webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(ApiResponse.class);
    }
    public  Mono<OwnedGameResponse> getOwnedGames(String steamId) {
        String url = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v001/?key=9D94F49413553413A449F22760F36A56&steamid=" + steamId + "&format=json";
        return webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(OwnedGameResponse.class);
    }

    public void saveGames(List<Game> games) {
        List<GameEntity> gameEntities = games.stream().map(this::mapToEntity).collect(Collectors.toList());
        gameRepository.saveAll(gameEntities);
    }

    private GameEntity mapToEntity(Game game) {
        GameEntity gameEntity = new GameEntity();
        gameEntity.setAppId(game.getAppId());
        gameEntity.setPlaytimeForever(game.getPlaytimeForever());
        updateGameDetails(gameEntity);
        return gameEntity;
    }
    private void updateGameDetails(GameEntity gameEntity) {
        String url = "https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=9D94F49413553413A449F22760F36A56&appid=" + gameEntity.getAppId();
        webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(GameDetailsResponse.class)
                .map(GameDetailsResponse::getGame)
                .doOnNext(details -> {
                    gameEntity.setName(details.getName());
                    gameRepository.save(gameEntity); // Save the updated entity
                })
                .subscribe();
    }
}
