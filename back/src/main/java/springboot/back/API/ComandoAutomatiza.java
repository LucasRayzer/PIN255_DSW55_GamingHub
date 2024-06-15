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
        webClient.get().uri("http://localhost:8080/api/playerGames/" + steamId).retrieve().bodyToMono(String.class).block();
        webClient.get().uri("http://localhost:8080/api/deleteEmpty").retrieve().bodyToMono(String.class).block();
    }
    public void executeCommands2(String steamId){
        webClient.get().uri("http://localhost:8080/api/deleteEmpty").retrieve().bodyToMono(String.class).block();
        jogoRepository.findAll().forEach(jogo -> {
            if(jogo.getNome()!=null)
                if(!jogo.getNome().isEmpty() || !jogo.getNome().isBlank())
                    webClient.get().uri("http://localhost:8080/api/playerAchievements/" + steamId + "/" + jogo.getAppId()).retrieve().bodyToMono(String.class).block();
        });
        webClient.get().uri("http://localhost:8080/api/set").retrieve().bodyToMono(String.class).block();
        webClient.get().uri("http://localhost:8080/user/associar").retrieve().bodyToMono(String.class).block();
    }
}
