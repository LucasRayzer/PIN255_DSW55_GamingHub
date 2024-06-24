package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Trofeu;

import java.util.List;

public interface TrofeuRepository extends JpaRepository<Trofeu, Integer> {
    Trofeu findByAppId(int appId);
    Trofeu findByJogo(Jogo jogo);
    List<Trofeu> findBySteamId(String steamId);
}
