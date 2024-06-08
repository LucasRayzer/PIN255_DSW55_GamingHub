package springboot.back.API;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import springboot.back.Modelo.Conquista;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ConquistaResponse {
    @JsonProperty("playerstats")
    private  UserStats userStats;

    public UserStats getUserStats() {
        return userStats;
    }

    public void setUserStats(UserStats userStats) {
        this.userStats = userStats;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class UserStats {
        @JsonProperty("steamId")
        private String steamID;

        @JsonProperty("gameName")
        private String gameName;

        @JsonProperty("achievements")
        private ConquistaR[] conquistas;

        public String getSteamID() {
            return steamID;
        }

        public void setSteamID(String steamID) {
            this.steamID = steamID;
        }

        public String getGameName() {
            return gameName;
        }

        public void setGameName(String gameName) {
            this.gameName = gameName;
        }

        public ConquistaR[] getConquistas() {
            return conquistas;
        }

        public void setConquistas(ConquistaR[] conquistas) {
            this.conquistas = conquistas;
        }
    }
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class ConquistaR {
        @JsonProperty("apiname")
        private String apiName;

        @JsonProperty("achieved")
        private int achieved;

        @JsonProperty("unlocktime")
        private long unlockTime;

        public String getApiName() {
            return apiName;
        }

        public void setApiName(String apiName) {
            this.apiName = apiName;
        }

        public int getAchieved() {
            return achieved;
        }

        public void setAchieved(int achieved) {
            this.achieved = achieved;
        }

        public long getUnlockTime() {
            return unlockTime;
        }

        public void setUnlockTime(long unlockTime) {
            this.unlockTime = unlockTime;
        }
    }
}
