package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Jogo;

public interface JogoRepository extends JpaRepository<Jogo, Integer> {
}
