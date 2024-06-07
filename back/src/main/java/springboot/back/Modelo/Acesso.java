package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Acesso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dataAcesso;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Acesso() {
    }

    public Acesso(Integer id, Date dataAcesso, Usuario usuario) {
        this.id = id;
        this.dataAcesso = dataAcesso;
        this.usuario = usuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDataAcesso() {
        return dataAcesso;
    }

    public void setDataAcesso(Date dataAcesso) {
        this.dataAcesso = dataAcesso;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public void atualizarRankingJogador() {
        // Implementação do método
    }

    public void atualizaTempoLogin() {
        // Implementação do método
    }
}
