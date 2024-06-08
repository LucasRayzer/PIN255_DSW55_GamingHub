package springboot.back.API;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DetalhesResponse {
    @JsonProperty("game")
    private DetalheJogo detalheJogo;

    public DetalheJogo getDetalheJogo() {
        return detalheJogo;
    }

    public void setDetalheJogo(DetalheJogo detalheJogo) {
        this.detalheJogo = detalheJogo;
    }
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class DetalheJogo{
        @JsonProperty("gameName")
        private String nome;

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }
    }
}
