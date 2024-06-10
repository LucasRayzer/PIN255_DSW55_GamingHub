package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer usuarioId;


    private String nomeUsuario;
    private String apelido;
    private String senha;
    private String steamId;
    @OneToMany(mappedBy = "usuario")
    private List<Acesso> acessos;

    @ManyToMany
    @JoinTable(
            name = "usuario_jogo",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "jogo_id")
    )
    private List<Jogo> biblioteca;

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

    public List<Jogo> getBiblioteca() {
        return biblioteca;
    }

    public void setBiblioteca(List<Jogo> biblioteca) {
        this.biblioteca = biblioteca;
    }

    public String getSteamId() {
        return steamId;
    }

    public void setSteamId(String steamId) {
        this.steamId = steamId;
    }
    public void adicionarJogo(Jogo jogo){
        biblioteca.add(jogo);
    }

    public void conectarSteam() {
        // Implementação do método
    }

    public void ocultarJogo(Jogo jogo) {
        // Implementação do método
    }

    public void alterarApelido() {
        // Implementação do método
    }

    public void editarNotaJogo(Jogo jogo) {
        // Implementação do método
    }

    public void defineNotaJogo(Jogo jogo) {
        // Implementação do método
    }

    public void exibeConquistaJogo(Jogo jogo) {
        // Implementação do método
    }
}
