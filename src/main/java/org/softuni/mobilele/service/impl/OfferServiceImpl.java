package org.softuni.mobilele.service.impl;


import lombok.Data;
import org.softuni.mobilele.model.dto.CreateOfferDTO;
import org.softuni.mobilele.model.entity.ModelEntity;
import org.softuni.mobilele.model.entity.OfferEntity;
import org.softuni.mobilele.repository.ModelRepository;
import org.softuni.mobilele.repository.OfferRepository;
import org.softuni.mobilele.service.OfferService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.UUID;

@Service
@Data
@lombok.AllArgsConstructor
public class OfferServiceImpl implements OfferService {

    private final OfferRepository offerRepository;
    private final ModelRepository modelRepository;

    @Override
    public UUID createOffer(CreateOfferDTO createOfferDTO) {

        OfferEntity newOffer = map(createOfferDTO);
        ModelEntity modelEntity = modelRepository.findById(createOfferDTO.getModelId()).orElseThrow(() ->
        new IllegalArgumentException("Model with id " + createOfferDTO.getModelId() + " not found!"));

        newOffer.setModel(modelEntity);

        newOffer = offerRepository.save(newOffer);

        return newOffer.getUuid();
    }

    private  OfferEntity map(CreateOfferDTO createOfferDTO) {

        return  new OfferEntity()
                .setUuid(UUID.randomUUID())
                .setEngine(createOfferDTO.getEngine())
                .setTransmission(createOfferDTO.getTransmission())
                .setMileage(createOfferDTO.getMileage())
                .setYear(createOfferDTO.getYear())
                .setPrice(BigDecimal.valueOf(createOfferDTO.getPrice()))
                .setDescription(createOfferDTO.getDescription())
                .setImageUrl(createOfferDTO.getImageUrl());


    }
}
