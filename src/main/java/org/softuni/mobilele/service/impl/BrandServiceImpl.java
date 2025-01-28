package org.softuni.mobilele.service.impl;

import lombok.Data;
import org.softuni.mobilele.model.dto.BrandDTO;
import org.softuni.mobilele.model.dto.ModelDTO;
import org.softuni.mobilele.model.entity.ModelEntity;
import org.softuni.mobilele.repository.BrandRepository;
import org.softuni.mobilele.repository.ModelRepository;
import org.softuni.mobilele.service.BrandService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@Service
@Data
@lombok.AllArgsConstructor
public class BrandServiceImpl implements BrandService {

    private final ModelRepository modelRepository;
    private final BrandRepository brandRepository;

    @Override
    public List<BrandDTO> getAllBrands() {
        // Create a TreeMap to store brands in alphabetical order
        Map<String, BrandDTO> brands = new TreeMap<>();

        // Iterate through all models retrieved from the repository
        for (ModelEntity model : modelRepository.findAll()) {
            // Check if the brand already exists in the map
            if (!brands.containsKey(model.getBrand().getName())) {
                // If not, add a new BrandDTO to the map
                brands.put(
                        model.getBrand().getName(),
                        new BrandDTO(model.getBrand().getName(), new ArrayList<>())
                );
            }
            // Add the model information to the corresponding BrandDTO
            brands.get(model.getBrand().getName()).models().add(
                    new ModelDTO(model.getId(), model.getName())
            );
        }

        // Return all BrandDTOs as a list
        return brands.values().stream().toList();
    }
}
