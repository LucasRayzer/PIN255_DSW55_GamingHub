package springboot.back.Modelo;

import jakarta.persistence.Embeddable;

import java.util.Objects;

@Embeddable
public class UsuarioJogoId {
    private Integer usuarioId;
    private Integer jogoId;

    public UsuarioJogoId() {
    }

    public UsuarioJogoId(Integer usuarioId, Integer jogoId) {
        this.usuarioId = usuarioId;
        this.jogoId = jogoId;
    }

    public Integer getJogoId() {
        return jogoId;
    }

    public void setJogoId(Integer jogoId) {
        this.jogoId = jogoId;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsuarioJogoId that = (UsuarioJogoId) o;
        return Objects.equals(usuarioId, that.usuarioId) && Objects.equals(jogoId, that.jogoId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(usuarioId, jogoId);
    }
}
