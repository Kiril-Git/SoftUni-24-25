function arrayManipulations(input) {
    const CONCRETE_COST_PER_YARD = 1900;  
    const CUBIC_YARDS_PER_FOOT = 195;
    const MAX_WALL_HEIGHT = 30;           

    let inputArr = input.map(Number); 
    let dailyConcreteArr = [];
    let totalConcrete = 0;


    while (inputArr.some(height => height < MAX_WALL_HEIGHT)) { 

        let dailyConcrete = 0;

        for (let i = 0; i < inputArr.length; i++) {

            if (inputArr[i] < MAX_WALL_HEIGHT) {
                inputArr[i]++;  
                dailyConcrete += CUBIC_YARDS_PER_FOOT; 
            }
        }

        if (dailyConcrete > 0) {
            dailyConcreteArr.push(dailyConcrete);
            totalConcrete += dailyConcrete;
        }
    }

    console.log(dailyConcreteArr.join(', '));
    console.log((totalConcrete * CONCRETE_COST_PER_YARD) + ' pesos');
}

arrayManipulations([21, 25, 28]);




// print:       585, 585, 390, 390, 390, 195, 195, 195, 195
//              5928000 pesos
