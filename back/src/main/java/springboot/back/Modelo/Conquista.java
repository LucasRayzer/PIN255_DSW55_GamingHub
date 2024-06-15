package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.time.Instant;
import java.util.List;

@Entity
public class Conquista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer conquistaId;

    private String steamId;
    private int appId;
    private String nomeConquista;
    private int conquistaConcluida;
    private Instant unlockTime;

    @ManyToOne
    @JoinColumn(name = "jogo_id")
    private Jogo jogo;
    public Integer getIdConquista() {
        return conquistaId;
    }

    public void setIdConquista(Integer idConquista) {
        this.conquistaId = idConquista;
    }

    public String getSteamId() {
        return steamId;
    }

    public void setSteamId(String steamId) {
        this.steamId = steamId;
    }

    public int getAppId() {
        return appId;
    }

    public void setAppId(int appId) {
        this.appId = appId;
    }

    public String getNomeConquista() {
        return nomeConquista;
    }

    public void setNomeConquista(String nomeConquista) {
        this.nomeConquista = nomeConquista;
    }

    public int getConquistaConcluida() {
        return conquistaConcluida;
    }

    public void setConquistaConcluida(int conquistaConcluida) {
        this.conquistaConcluida = conquistaConcluida;
    }

    public Instant getUnlockTime() {
        return unlockTime;
    }

    public void setUnlockTime(Instant unlockTime) {
        this.unlockTime = unlockTime;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }
}
