package springboot.back.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ApiService {
    @Autowired
    private WebClient.Builder webClientBuilder;
    @Autowired
    private ConquistaRepository conquistaRepository;
    @Autowired
    private JogoRepository jogoRepository;

    public Mono<ApiResponse> getSteamPlayerProfile(String steamId) {
        String url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9D94F49413553413A449F22760F36A56&steamids=" + steamId;
        return webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(ApiResponse.class);
    }
    public  Mono<JogosUsuarioResponse> getOwnedGames(String steamId) {
        String url = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v001/?key=9D94F49413553413A449F22760F36A56&steamid=" + steamId + "&format=json";
        return webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(JogosUsuarioResponse.class)
                .doOnNext(response -> saveGames(response.getJogos().getJogoRList(), steamId));
    }

    public void saveGames(List<JogosUsuarioResponse.JogoR> games, String steamId) {
        List<Jogo> jogosEntidade = games.stream()
                .map(jogoR -> mapToEntity(jogoR, steamId))
                .collect(Collectors.toList());
        jogoRepository.saveAll(jogosEntidade);
    }
    private Jogo mapToEntity(JogosUsuarioResponse.JogoR jogoR, String steamId) {
        Jogo jogoE = new Jogo();
        jogoE.setAppId(jogoR.getAppId());
        jogoE.setTempoDeJogo(jogoR.getPlaytimeForever());
        jogoE.setJogoFavorito(false);
        jogoE.setSteamId(steamId);
        updateGameDetails(jogoE);
        return jogoE;
    }
    private void updateGameDetails(Jogo jogo) {
        String url = "https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=9D94F49413553413A449F22760F36A56&appid=" + jogo.getAppId();
        webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(DetalhesResponse.class)
                .map(DetalhesResponse::getDetalheJogo)
                .doOnNext(detalhes -> {
                    jogo.setNome(detalhes.getNome());
                    jogoRepository.save(jogo);
                })
                .subscribe();
    }
    public Mono<ConquistaResponse> getPlayerAchievements(String steamId, int appId) {
        String url = "https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=9D94F49413553413A449F22760F36A56&steamid="+ steamId +"&appid="+ appId;
        return webClientBuilder.build()
                .get()
                .uri(url)
                .retrieve()
                .bodyToMono(ConquistaResponse.class)
                .filter(response -> response.getUserStats() != null && response.getUserStats().getConquistas() != null)
                .doOnNext(response -> saveAchievements(response, steamId, appId));
    }
    private void saveAchievements(ConquistaResponse response, String steamId, int appId){
        List<Conquista> conquistas = Arrays.stream(response.getUserStats().getConquistas())
                .map(conquistaR -> mapToEntity(conquistaR, steamId, appId))
                .collect(Collectors.toList());
        conquistaRepository.saveAll(conquistas);
    }

    private Conquista mapToEntity(ConquistaResponse.ConquistaR conquistaR, String steamId, int appId) {
        Conquista conq = new Conquista();
        conq.setSteamId(steamId);
        conq.setAppId(appId);
        conq.setNomeConquista(conquistaR.getApiName());
        conq.setConquistaConcluida(conquistaR.getAchieved());
        conq.setUnlockTime(Instant.ofEpochSecond(conquistaR.getUnlockTime()));
        return conq;
    }
}
