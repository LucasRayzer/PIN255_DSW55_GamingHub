package springboot.back.Modelo;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Acesso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime dataAcesso;
    private String nomeUsuario;
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
    @PrePersist
    protected void onCreate(){
        this.dataAcesso= LocalDateTime.now();
    }
    public Acesso() {
    }

    public Acesso(Integer id, LocalDateTime dataAcesso, Usuario usuario) {
        this.id = id;
        this.dataAcesso = dataAcesso;
        this.usuario = usuario;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getDataAcesso() {
        return dataAcesso;
    }

    public void setDataAcesso(LocalDateTime dataAcesso) {
        this.dataAcesso = dataAcesso;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public void atualizarRankingJogador() {
        //usuario controller
    }

    public void atualizaTempoLogin() {
        //acesso controller
    }
}
