package springboot.back.Modelo;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="usuario_jogo")
public class UsuarioJogo implements Serializable {

    @EmbeddedId
    private UsuarioJogoId id;

    @ManyToOne
    @MapsId("usuarioId")
    @JoinColumn(name="usuario_id")
    private Usuario usuario;

    @ManyToOne
    @MapsId("jogoId")
    @JoinColumn(name = "jogo_id")
    private Jogo jogo;

    public UsuarioJogoId getId() {
        return id;
    }

    public void setId(UsuarioJogoId id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }
}
