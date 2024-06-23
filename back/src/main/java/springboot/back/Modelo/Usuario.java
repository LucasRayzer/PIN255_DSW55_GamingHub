package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.List;
import java.util.Set;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer usuarioId;


    private String nomeUsuario;
    private String apelido;
    private String senha;
    private String steamId;
    private int rank;
    @OneToMany(mappedBy = "usuario")
    private List<Acesso> acessos;

    @OneToMany(mappedBy = "usuario")
    private Set<UsuarioJogo> usuarioJogos;

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Set<UsuarioJogo> getUsuarioJogos() {
        return usuarioJogos;
    }

    public void setUsuarioJogos(Set<UsuarioJogo> usuarioJogos) {
        this.usuarioJogos = usuarioJogos;
    }

    public Integer getId() {
        return usuarioId;
    }

    public void setId(Integer id) {
        this.usuarioId = id;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<Acesso> getAcessos() {
        return acessos;
    }

    public void setAcessos(List<Acesso> acessos) {
        this.acessos = acessos;
    }

    public String getSteamId() {
        return steamId;
    }

    public void setSteamId(String steamId) {
        this.steamId = steamId;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public void conectarSteam() {
        // UsuarioController
    }

    public void ocultarJogo(Jogo jogo) {

    }

    public void alterarApelido() {
        // UsuarioController
    }

    public void editarNotaJogo(Jogo jogo) {
        // JogoController
    }

    public void defineNotaJogo(Jogo jogo) {
        // JogoController
    }

    public void exibeConquistaJogo(Jogo jogo) {
        // JogoController
    }
}
