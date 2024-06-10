package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Trofeu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "jogo_id")
    private Jogo jogoFinalizado;

    private Boolean trofeuOuro;

    private Boolean trofeuPrata;
    private int appId;

    @ManyToMany
    @JoinTable(
            name = "trofeu_conquista",
            joinColumns = @JoinColumn(name = "trofeu_id"),
            inverseJoinColumns = @JoinColumn(name = "conquista_id")
    )
    private List<Conquista> conquistas;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Jogo getJogoFinalizado() {
        return jogoFinalizado;
    }

    public void setJogoFinalizado(Jogo jogoFinalizado) {
        this.jogoFinalizado = jogoFinalizado;
    }

    public Boolean getTrofeuOuro() {
        return trofeuOuro;
    }

    public void setTrofeuOuro(Boolean trofeuOuro) {
        this.trofeuOuro = trofeuOuro;
    }

    public Boolean getTrofeuPrata() {
        return trofeuPrata;
    }

    public void setTrofeuPrata(Boolean trofeuPrata) {
        this.trofeuPrata = trofeuPrata;
    }

    public List<Conquista> getConquistas() {
        return conquistas;
    }

    public void setConquistas(List<Conquista> conquistas) {
        this.conquistas = conquistas;
    }

    public int getAppId() {
        return appId;
    }

    public void setAppId(int appId) {
        this.appId = appId;
    }

    public void reinvidicarTrofeu() {

    }
}

