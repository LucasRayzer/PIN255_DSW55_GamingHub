package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.UsuarioJogo;
import springboot.back.Modelo.UsuarioJogoId;

public interface UsuarioJogoRepository extends JpaRepository<UsuarioJogo, UsuarioJogoId> {
}
