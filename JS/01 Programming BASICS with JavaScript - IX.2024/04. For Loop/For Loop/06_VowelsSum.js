function sumVowelValues (input) {

    const VALUE_A = 1;
    const VALUE_E = 2;
    const VALUE_I = 3;
    const VALUE_O = 4;
    const VALUE_U = 5;

    let text = input[0]
    let sum = 0

    for (let i = 0; i < text.length; i++){

        let char = text[i]

        switch (char){

            case "a":
                sum += VALUE_A
                break

            case "e":
                sum += VALUE_E
                break

            case "i":
                sum += VALUE_I
                break

            case "o":
                sum += VALUE_O
                break

            case "u":
                sum += VALUE_U
                break
        }
    }
    console.log(sum)
}
  
sumVowelValues(["hello"])

