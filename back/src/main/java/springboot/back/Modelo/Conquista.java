package springboot.back.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
public class Conquista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idConquista;

    private String nomeConquista;
    private Boolean conquistaConcluida;

    @ManyToMany(mappedBy = "conquistas")
    private List<Trofeu> trofeuFinalizados;

    @ManyToOne
    @JoinColumn(name = "jogo_id")
    private Jogo jogo;

    public Conquista() {
    }

    public Conquista(Integer idConquista, String nomeConquista, Boolean conquistaConcluida, List<Trofeu> trofeuFinalizados, Jogo jogo) {
        this.idConquista = idConquista;
        this.nomeConquista = nomeConquista;
        this.conquistaConcluida = conquistaConcluida;
        this.trofeuFinalizados = trofeuFinalizados;
        this.jogo = jogo;
    }

    public Integer getIdConquista() {
        return idConquista;
    }

    public void setIdConquista(Integer idConquista) {
        this.idConquista = idConquista;
    }

    public String getNomeConquista() {
        return nomeConquista;
    }

    public void setNomeConquista(String nomeConquista) {
        this.nomeConquista = nomeConquista;
    }

    public Boolean getConquistaConcluida() {
        return conquistaConcluida;
    }

    public void setConquistaConcluida(Boolean conquistaConcluida) {
        this.conquistaConcluida = conquistaConcluida;
    }

    public List<Trofeu> getTrofeuFinalizados() {
        return trofeuFinalizados;
    }

    public void setTrofeuFinalizados(List<Trofeu> trofeuFinalizados) {
        this.trofeuFinalizados = trofeuFinalizados;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }
}
