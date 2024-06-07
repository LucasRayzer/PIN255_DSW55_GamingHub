package springboot.back.API;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class GameEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private int appId;
    private String name;
    private int playtimeForever;
    private String imgIconUrl;
    private String imgLogoUrl;

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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
