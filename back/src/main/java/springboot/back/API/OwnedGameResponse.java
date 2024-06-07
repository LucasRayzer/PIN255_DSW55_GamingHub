package springboot.back.API;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class OwnedGameResponse {
    @JsonProperty("response")
    public GameResponse response;

    public GameResponse getResponse() {
        return response;
    }

    public void setResponse(GameResponse response) {
        this.response = response;
    }

    public static class GameResponse{
        @JsonProperty("game_count")
        private int gameCount;

        @JsonProperty("games")
        private List<Game> games;

        public int getGameCount() {
            return gameCount;
        }

        public void setGameCount(int gameCount) {
            this.gameCount = gameCount;
        }

        public List<Game> getGames() {
            return games;
        }

        public void setGames(List<Game> games) {
            this.games = games;
        }
    }
}
