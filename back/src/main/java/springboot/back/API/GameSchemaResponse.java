package springboot.back.API;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class GameSchemaResponse {
    @JsonProperty("game")
    private Game game;

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Game {
        @JsonProperty("availableGameStats")
        private AvailableGameStats availableGameStats;

        public AvailableGameStats getAvailableGameStats() {
            return availableGameStats;
        }

        public void setAvailableGameStats(AvailableGameStats availableGameStats) {
            this.availableGameStats = availableGameStats;
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class AvailableGameStats {
        @JsonProperty("achievements")
        private List<Achievement> achievements;

        public List<Achievement> getAchievements() {
            return achievements;
        }

        public void setAchievements(List<Achievement> achievements) {
            this.achievements = achievements;
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Achievement {
        @JsonProperty("name")
        private String name;

        @JsonProperty("displayName")
        private String displayName;

        @JsonProperty("icon")
        private String icon;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDisplayName() {
            return displayName;
        }

        public void setDisplayName(String displayName) {
            this.displayName = displayName;
        }

        public String getIcon() {
            return icon;
        }

        public void setIcon(String icon) {
            this.icon = icon;
        }
    }
}

