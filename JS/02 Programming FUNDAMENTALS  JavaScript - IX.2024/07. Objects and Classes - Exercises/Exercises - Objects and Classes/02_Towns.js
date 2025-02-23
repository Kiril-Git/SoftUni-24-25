function generateTownObj (inputArr) {


    for (let el of inputArr) {

        // let [town, latitude, longitude] = el.split(' | ')    -    or array destructuring
        let townArr = el.split(' | ')

        let town = townArr[0]
        let lat = +townArr[1]
        let long = +townArr[2]

        let latitude = lat.toFixed(2)
        let longitude = long.toFixed(2)


        let city = {
            town,
            latitude,
            longitude
        }



        console.log(city)

    }

}

generateTownObj(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'] )




// print:          {town: 'Sofia', latitude: '42.70', longitude: '23.33'}
//                 {town: 'Beijing', latitude: '39.91', longitude: '116.36'}
//