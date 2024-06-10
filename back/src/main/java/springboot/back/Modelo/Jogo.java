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
    private String steamId;
    private String nome;
    private int tempoDeJogo;
    private Integer notaJogo;
    private Boolean jogoFavorito;
    private int n_conquistas;
    private int f_conquistas;

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

    public String getSteamId() {
        return steamId;
    }

    public void setSteamId(String steamId) {
        this.steamId = steamId;
    }

    public int getN_conquistas() {
        return n_conquistas;
    }

    public void setN_conquistas(int n_conquistas) {
        this.n_conquistas = n_conquistas;
    }

    public int getF_conquistas() {
        return f_conquistas;
    }

    public void setF_conquistas(int f_conquistas) {
        this.f_conquistas = f_conquistas;
    }
    //calcula as conquistas finalizadas do jogo
    public Jogo conquistasFinalizadas(List<Conquista> conquistas){
        for(int i=0;i<conquistas.size();i++){
            if(conquistas.get(i).getAppId()==getAppId()&&conquistas.get(i).getConquistaConcluida()==1){
                f_conquistas++;
            }
        }
        return this;
    }
}
