function oddsFilter(inputArr) {


    let oddsArr = inputArr.filter((el, index) => index % 2 != 0)
                .map(el => el * 2)
                .reverse()

    


    
    console.log(oddsArr.join(' '))

}

oddsFilter([10, 15, 20, 25])

