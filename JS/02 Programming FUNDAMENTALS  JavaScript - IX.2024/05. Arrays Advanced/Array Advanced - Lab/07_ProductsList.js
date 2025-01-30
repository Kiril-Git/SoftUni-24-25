function arrSort(inputArr) {

let sortedArr = [...inputArr]
                .sort()
                .map((el, index) => `${index +1}.${el}`)


console.log(sortedArr.join('\n'))
}

arrSort(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])