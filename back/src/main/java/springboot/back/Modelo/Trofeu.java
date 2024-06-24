package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Trofeu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "jogo_id")
    private Jogo jogo;

    private Boolean trofeuOuro;

    private Boolean trofeuPrata;
    private int appId;
    private String steamId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
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

    public int getAppId() {
        return appId;
    }

    public void setAppId(int appId) {
        this.appId = appId;
    }

    public String getSteamId() {
        return steamId;
    }

    public void setSteamId(String steamId) {
        this.steamId = steamId;
    }

    public void reinvidicarTrofeu() {

    }
}

