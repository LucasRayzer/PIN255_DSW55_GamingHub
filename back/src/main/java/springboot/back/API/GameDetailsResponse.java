package springboot.back.API;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GameDetailsResponse {
    @JsonProperty("game")
    private GameDetails game;

    public GameDetails getGame() {
        return game;
    }

    public void setGame(GameDetails game) {
        this.game = game;
    }
}
