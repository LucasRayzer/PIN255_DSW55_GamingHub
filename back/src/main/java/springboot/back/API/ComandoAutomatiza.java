package springboot.back.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import springboot.back.Modelo.Jogo;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;

@Service
public class ComandoAutomatiza {
    private final WebClient webClient;

    @Autowired
    public ComandoAutomatiza(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }
    @Autowired
    JogoRepository jogoRepository;
    @Autowired
    ConquistaRepository conquistaRepository;
    public void executeCommands(String steamId) {
        int appId1 = 1091500;
        int appId2 = 1262350;

        webClient.get().uri("http://localhost:8080/api/playerGames/" + steamId).retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/api/games").retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/api/playerAchievements/" + steamId + "/" + appId1).retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/api/achievements").retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/jogo/associar").retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/jogo/38").retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/jogo/38/conquistas").retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/api/playerAchievements/" + steamId + "/" + appId2).retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/jogo/45/conquistas").retrieve().bodyToMono(String.class).block();
        //webClient.get().uri("http://localhost:8080/user/associar").retrieve().bodyToMono(String.class).block();
    }
    public void executeCommands2(String steamId){
        for(int i=1;i<= jogoRepository.count();i++){
            Jogo jogo = jogoRepository.findById(i).get();
            if(jogo.getNome() != null)
                if(!jogo.getNome().isEmpty()||!jogo.getNome().isBlank())
                    webClient.get().uri("http://localhost:8080/api/playerAchievements/" + steamId + "/" + jogo.getAppId()).retrieve().bodyToMono(String.class).block();
        }
    }

    public void executeCommands3() {
        webClient.get().uri("http://localhost:8080/jogo/associar").retrieve().bodyToMono(String.class).block();
        webClient.get().uri("http://localhost:8080/api/setConquistas").retrieve().bodyToMono(String.class).block();
    }
}
