package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Jogo;

import java.util.List;

public interface JogoRepository extends JpaRepository<Jogo, Integer> {
    Jogo findByAppId(int appId);
    List<Jogo> findByNome(String nome);
    List<Jogo> findBySteamId(String steamId);
}
