package springboot.back.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.back.Modelo.Jogo;
import springboot.back.Modelo.Usuario;
import springboot.back.Modelo.UsuarioJogo;
import springboot.back.Repositorio.UsuarioRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    public Usuario findBySteamId(String steamId){
        return usuarioRepository.findBySteamId(steamId);
    }
    public List<Jogo> getJogosByUsuarioId(int usuarioId) {
        Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return usuario.getUsuarioJogos().stream()
                .map(UsuarioJogo::getJogo)
                .collect(Collectors.toList());
    }
    public List<Jogo> getJogosBySteamId(String steamId) {
        Usuario usuario = usuarioRepository.findBySteamId(steamId);
        return usuario.getUsuarioJogos().stream()
                .map(UsuarioJogo::getJogo)
                .collect(Collectors.toList());
    }
}
