package springboot.back.Modelo;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import java.io.IOException;
import java.net.URL;
import com.fasterxml.jackson.databind.JsonNode;
import java.util.List;
import java.util.Set;

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
    private Integer currentPlayers;
    @OneToMany(mappedBy = "jogo")
    private List<Conquista> conquistasJogo;

    @OneToMany(mappedBy = "jogo")
    private Set<UsuarioJogo> usuarioJogos;

    @OneToOne(mappedBy = "jogo")
    private Trofeu trofeu;

    public Trofeu getTrofeu() {
        return trofeu;
    }

    public void setTrofeu(Trofeu trofeu) {
        this.trofeu = trofeu;
    }

    public Set<UsuarioJogo> getUsuarioJogos() {
        return usuarioJogos;
    }

    public void setUsuarioJogos(Set<UsuarioJogo> usuarioJogos) {
        this.usuarioJogos = usuarioJogos;
    }

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

    public String getSteamId() {
        return steamId;
    }

    public void addConquistasJogo(Conquista conquista){
        conquistasJogo.add(conquista);
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

    public void conquistasFinalizadas(List<Conquista> conquistas){
        conquistas.forEach(conquista ->{
            if(conquista.getAppId()==getAppId()&&conquista.getConquistaConcluida()==1&&conquista.getSteamId().equals(steamId)){
                f_conquistas++;
            }
        });
    }

    public Integer getCurrentPlayers() {
        return currentPlayers;
    }

    public void setCurrentPlayers(Integer currentPlayers) {
        this.currentPlayers = currentPlayers;
    }

    public void atualizarCurrentPlayers() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            URL url = new URL("https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid="+appId);
            JsonNode rootNode = mapper.readTree(url);

            // Acessa o valor de player_count na resposta JSON
            JsonNode responseNode = rootNode.path("response");
            if (!responseNode.isMissingNode()) {
                Integer playerCount = responseNode.path("player_count").asInt();
                this.setCurrentPlayers(playerCount);
            } else {
                System.out.println("Resposta da API incompleta ou inválida.");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
