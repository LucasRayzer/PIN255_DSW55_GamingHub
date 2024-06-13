package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Conquista;

import java.util.List;

public interface ConquistaRepository extends JpaRepository<Conquista, Integer> {
    List<Conquista> findByAppId(int appId);
}
