package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Conquista;

public interface ConquistaRepository extends JpaRepository<Conquista, Integer> {
}
