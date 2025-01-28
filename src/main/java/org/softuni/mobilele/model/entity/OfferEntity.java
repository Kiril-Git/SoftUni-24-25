package org.softuni.mobilele.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.JdbcTypeCode;
import org.softuni.mobilele.model.enums.EngineEnum;
import org.softuni.mobilele.model.enums.TransmissionEnum;

import java.math.BigDecimal;
import java.sql.Types;
import java.util.UUID;

@Entity
@Table(name = "offers")
@lombok.Data
public class OfferEntity extends BaseEntity {


    @NotNull
    @JdbcTypeCode(Types.VARCHAR)
    private UUID uuid;

    @NotNull
    @ManyToOne
    private ModelEntity model;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EngineEnum engine;

    @NotNull
    @Enumerated(EnumType.STRING)
    private TransmissionEnum transmission;

    private long mileage;

    @Min(1930)
    private int year;

    @NotNull
    private BigDecimal price;

    @NotEmpty
    private String description;

    @NotEmpty
    private String imageUrl;






    public @NotNull UUID getUuid() {
        return uuid;
    }

    public OfferEntity setUuid( UUID uuid) {
        this.uuid = uuid;
        return this;
    }

    public @NotNull ModelEntity getModel() {
        return model;
    }

    public void setModel(@NotNull ModelEntity model) {
        this.model = model;
    }

    public @NotNull EngineEnum getEngine() {
        return engine;
    }

    public OfferEntity setEngine(@NotNull EngineEnum engine) {
        this.engine = engine;
        return this;

    }

    public @NotNull TransmissionEnum getTransmission() {
        return transmission;
    }

    public OfferEntity setTransmission(@NotNull TransmissionEnum transmission) {
        this.transmission = transmission;
        return this;
    }

    public long getMileage() {
        return mileage;
    }

    public OfferEntity setMileage(long mileage) {
        this.mileage = mileage;
        return this;
    }

    @Min(1930)
    public int getYear() {
        return year;
    }

    public OfferEntity setYear(@Min(1930) int year) {
        this.year = year;
        return this;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public OfferEntity setPrice(BigDecimal price) {
        this.price = price;
        return this;
    }

    public @NotEmpty String getDescription() {
        return description;
    }

    public OfferEntity setDescription(@NotEmpty String description) {
        this.description = description;
        return this;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public OfferEntity setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
}
