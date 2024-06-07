package springboot.back.API;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Game {
    @JsonProperty("appid")
    private int appId;

    @JsonProperty("name")
    private String name;

    @JsonProperty("playtime_forever")
    private int playtimeForever;

    @JsonProperty("img_icon_url")
    private String imgIconUrl;

    @JsonProperty("img_logo_url")
    private String imgLogoUrl;

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

    public String getImgIconUrl() {
        return imgIconUrl;
    }

    public void setImgIconUrl(String imgIconUrl) {
        this.imgIconUrl = imgIconUrl;
    }

    public String getImgLogoUrl() {
        return imgLogoUrl;
    }

    public void setImgLogoUrl(String imgLogoUrl) {
        this.imgLogoUrl = imgLogoUrl;
    }
}

