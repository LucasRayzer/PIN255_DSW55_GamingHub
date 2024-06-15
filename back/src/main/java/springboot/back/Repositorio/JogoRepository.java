package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Jogo;

import java.util.List;

public interface JogoRepository extends JpaRepository<Jogo, Integer> {
    Jogo findByAppId(int appId);
    Jogo findByNome(String nome);
    Jogo findBySteamId(String steamId);
}
