package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Jogo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer jogoId;

    private Integer notaJogo;
    private Boolean jogoFavorito;

    @OneToMany(mappedBy = "jogo")
    private List<Conquista> conquistasJogo;

    @ManyToMany(mappedBy = "biblioteca")
    private List<Usuario> usuarios;

    public Jogo() {
    }

    public Jogo(Integer jogoId, Integer notaJogo, Boolean jogoFavorito, List<Conquista> conquistasJogo, List<Usuario> usuarios) {
        this.jogoId = jogoId;
        this.notaJogo = notaJogo;
        this.jogoFavorito = jogoFavorito;
        this.conquistasJogo = conquistasJogo;
        this.usuarios = usuarios;
    }

    public Integer getJogoId() {
        return jogoId;
    }

    public void setJogoId(Integer jogoId) {
        this.jogoId = jogoId;
    }

    public Integer getNotaJogo() {
        return notaJogo;
    }

    public void setNotaJogo(Integer notaJogo) {
        this.notaJogo = notaJogo;
    }

    public Boolean getJogoFavorito() {
        return jogoFavorito;
    }

    public void setJogoFavorito(Boolean jogoFavorito) {
        this.jogoFavorito = jogoFavorito;
    }

    public List<Conquista> getConquistasJogo() {
        return conquistasJogo;
    }

    public void setConquistasJogo(List<Conquista> conquistasJogo) {
        this.conquistasJogo = conquistasJogo;
    }

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }
}
