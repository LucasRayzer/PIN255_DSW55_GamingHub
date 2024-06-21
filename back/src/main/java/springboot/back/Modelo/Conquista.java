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
    private String nome;
    private int conquistaConcluida;
    private Instant unlockTime;
    private String imagem;  // Adiciona o atributo imagem

    @ManyToOne
    @JoinColumn(name = "jogo_id")
    private Jogo jogo;

    // getters e setters

    public Integer getConquistaId() {
        return conquistaId;
    }

    public void setConquistaId(Integer conquistaId) {
        this.conquistaId = conquistaId;
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
        return nome;
    }

    public void setNomeConquista(String nomeConquista) {
        this.nome = nomeConquista;
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

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }
}

