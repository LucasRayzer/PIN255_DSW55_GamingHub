package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import springboot.back.Modelo.Conquista;
import springboot.back.Modelo.Jogo;

import java.util.List;
import java.util.Optional;

public interface ConquistaRepository extends JpaRepository<Conquista, Integer> {
    List<Conquista> findByAppId(int appId);
    List<Conquista> findByJogo(Jogo jogo);
}
