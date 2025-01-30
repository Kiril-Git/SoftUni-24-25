function sequenceBuilder(n, k) {

    let sb = [1]

    for (let j = 0; j < n -1; j++) {

        let sum = 0
        let tempArr = sb.slice(-k)

        tempArr.forEach(el => sum += el)

        sb.push(sum)


}
    console.log(sb.join(' '))
}

sequenceBuilder(6, 3)
