package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Acesso;

public interface AcessoRepository extends JpaRepository<Acesso, Integer> {
}
