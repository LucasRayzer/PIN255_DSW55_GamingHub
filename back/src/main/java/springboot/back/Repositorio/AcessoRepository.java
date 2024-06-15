package springboot.back.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.back.Modelo.Acesso;
import springboot.back.Modelo.Usuario;

import java.util.List;

public interface AcessoRepository extends JpaRepository<Acesso, Integer> {
    List<Acesso> findByUsuario(Usuario usuario);
}
