package springboot.back.API;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class JogosUsuarioResponse {
    @JsonProperty("response")
    public Jogos jogos;

    public Jogos getJogos() {
        return jogos;
    }

    public void setJogos(Jogos jogos) {
        this.jogos = jogos;
    }
    public static class Jogos{
        @JsonProperty("game_count")
        private int gameCount;

        @JsonProperty("games")
        private List<JogoR> jogoRList;

        public int getGameCount() {
            return gameCount;
        }

        public void setGameCount(int gameCount) {
            this.gameCount = gameCount;
        }

        public List<JogoR> getJogoRList() {
            return jogoRList;
        }

        public void setJogoRList(List<JogoR> jogoRList) {
            this.jogoRList = jogoRList;
        }
    }

    public static class JogoR{
        @JsonProperty("appid")
        private int appId;

        @JsonProperty("name")
        private String name;

        @JsonProperty("playtime_forever")
        private int playtimeForever;

        public int getAppId() {
            return appId;
        }

        public void setAppId(int appId) {
            this.appId = appId;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getPlaytimeForever() {
            return playtimeForever;
        }

        public void setPlaytimeForever(int playtimeForever) {
            this.playtimeForever = playtimeForever;
        }
    }
}
