package springboot.back.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Trofeu;
import springboot.back.Repositorio.ConquistaRepository;
import springboot.back.Repositorio.JogoRepository;
import springboot.back.Repositorio.TrofeuRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private ApiService apiService;
    @Autowired
    private ConquistaRepository conquistaRepository;
    @Autowired
    private JogoRepository jogoRepository;
    @Autowired
    private TrofeuRepository trofeuRepository;

    // 76561198973296498
    // 76561198332097264
    /*DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;*/

    //http://192.168.1.28:8080/api/playerGames/76561198973296498
    //http://192.168.1.28:8080/user/76561198973296498/imagemPerfil
    //http://192.168.1.28:8080/api/deleteEmpty
    //http://localhost:8080/api/executeCommands2/76561198973296498
    //http://192.168.1.28:8080/api/set/76561198973296498
    //http://192.168.1.28:8080/api/setTrofeus/76561198973296498
    //http://192.168.1.28:8080/user/associar



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
    @GetMapping("/set/{steamId}")
    public void  setar(@PathVariable String steamId){
        jogoRepository.findAll().forEach(jogo-> {
            if(jogo.getN_conquistas()==0){
                if(jogo.getSteamId().equals(steamId)) {
                    AtomicInteger count = new AtomicInteger();
                    conquistaRepository.findByAppId(jogo.getAppId()).forEach(conquista -> {
                        if(conquista.getSteamId().equals(steamId)) {
                            count.getAndIncrement();
                            jogo.addConquistasJogo(conquista);
                            conquista.setJogo(jogo);
                            conquistaRepository.save(conquista);
                        }
                    });
                    jogo.setN_conquistas(count.get());
                    jogo.conquistasFinalizadas(conquistaRepository.findAll());
                    jogoRepository.save(jogo);
                }
            }
        });
    }
    @GetMapping("/deleteEmpty")
    public void deleteEmpty(){
        List<Integer> ids = new ArrayList<>();
        jogoRepository.findAll().forEach(jogo -> {
            if (jogo.getNome() == null || jogo.getNome().isEmpty()) {
                ids.add(jogo.getJogoId());
            }
        });
        jogoRepository.deleteAllById(ids);
    }
    @GetMapping("/setTrofeus/{steamId}")
    public void setTrofeus(@PathVariable String steamId){
        List<Jogo> jogos = jogoRepository.findBySteamId(steamId);
        for (Jogo jogo : jogos){
            if(trofeuRepository.findByJogo(jogo)==null){
                Trofeu trofeu = new Trofeu();
                trofeu.setTrofeuPrata(false);
                trofeu.setTrofeuOuro(false);
                trofeu.setAppId(jogo.getAppId());
                trofeu.setSteamId(steamId);
                if (jogo.getN_conquistas() != 0) {
                    int temp = jogo.getN_conquistas() / 2;
                    if (jogo.getF_conquistas() >= temp)
                        trofeu.setTrofeuPrata(true);
                    if (jogo.getN_conquistas() == jogo.getF_conquistas()) {
                        trofeu.setTrofeuOuro(true);
                        trofeu.setTrofeuPrata(true);
                    }
                    trofeu.setJogo(jogo);
                    trofeuRepository.save(trofeu);

                }
            }
        }
    }
}
