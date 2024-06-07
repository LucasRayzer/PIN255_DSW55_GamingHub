package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Trofeu;

public interface TrofeuRepository extends JpaRepository<Trofeu, Integer> {
}
