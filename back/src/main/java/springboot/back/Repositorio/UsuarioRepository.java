package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
