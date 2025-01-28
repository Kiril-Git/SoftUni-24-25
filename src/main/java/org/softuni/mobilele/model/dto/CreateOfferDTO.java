package org.softuni.mobilele.model.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.softuni.mobilele.model.enums.EngineEnum;
import org.softuni.mobilele.model.enums.TransmissionEnum;
import org.softuni.mobilele.model.validation.YearNotInTheFuture;

@Data
@NoArgsConstructor
@AllArgsConstructor
public final class CreateOfferDTO {

    private  @Positive @NotNull Long modelId;

    private  @NotNull EngineEnum engine;

    private  @NotNull TransmissionEnum transmission;

    private  @Positive @NotNull Integer mileage;

    @YearNotInTheFuture(message = "Do not put a year in the future, IDIOT!")
    private  @NotNull (message = "The year is required!")
    @Min(1930)
    Integer year;

    private  @Positive @NotNull Integer price;

    private  @NotEmpty @Size(min = 5, max = 500) String description;

    private  @NotEmpty String imageUrl;



    public static CreateOfferDTO empty() {
        return new CreateOfferDTO(null, null, null, null, null, null, null, null);
    }


}
