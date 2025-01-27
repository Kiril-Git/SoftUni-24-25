function loadingBarPrinter(inputNum) {

    let barArr = []

    let bar = '%'.repeat(inputNum /10) + '.'.repeat(10 - inputNum /10)

    if (inputNum === 100) {
        console.log('100% Complete!')
        console.log('[' + bar + ']')
    }
    else {
        console.log(inputNum + '% [' + bar + ']')
        console.log('Still loading...')
    }
}

loadingBarPrinter (50)