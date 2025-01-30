function sequenceBuilder(n, k) {

    let sb = [1]

    for (let j = 0; j < n -1; j++) {


        let sum = sb.slice(-k).reduce((acc, el) => acc + el, 0)

        sb.push(sum)

}

    console.log(sb.join(' '))
}

sequenceBuilder(8, 2)
