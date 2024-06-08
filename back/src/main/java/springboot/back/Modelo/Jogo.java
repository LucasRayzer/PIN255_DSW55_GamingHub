package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Jogo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer jogoId;

    private int appId;
    private String nome;
    private int tempoDeJogo;
    private Integer notaJogo;
    private Boolean jogoFavorito;

    @OneToMany(mappedBy = "jogo")
    private List<Conquista> conquistasJogo;

    @ManyToMany(mappedBy = "biblioteca")
    private List<Usuario> usuarios;

    public Integer getJogoId() {
        return jogoId;
    }

    public void setJogoId(Integer jogoId) {
        this.jogoId = jogoId;
    }

    public int getAppId() {
        return appId;
    }

    public void setAppId(int appId) {
        this.appId = appId;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getTempoDeJogo() {
        return tempoDeJogo;
    }

    public void setTempoDeJogo(int tempoDeJogo) {
        this.tempoDeJogo = tempoDeJogo;
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
