function heroesClassifier (inputArr) {


    let heros = []

    for (let el of inputArr) {

        let heroArr = el.split(' / ')

        let name = heroArr.shift()
        let level = +heroArr.shift()
        let items = heroArr.length > 0 ? heroArr[0].split(', ') : []

        heros.push ({ name, level, items })


    }

    heros.sort((a, b) => a.level - b.level)

    for (let el of heros) {

        console.log(`Hero: ${el.name}\nlevel => ${el.level}\nitems => ${el.items.join(', ')}`)
    }

}

heroesClassifier([ 'Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara' ] )







// print:                  Hero: Hes
//                         level => 1
//                         items => Desolator, Sentinel, Antara
//                         Hero: Derek
//                         level => 12
//                         items => BarrelVest, DestructionSword
//                         Hero: Isacc
//                         level => 25
//                         items => Apple, GravityGun
                        //

