function loadingBarPrinter(inputNum) {

    let barArr = []

    for (let i = 0; i < inputNum / 10; i++) {

        barArr.push('%')
    }

    for (let i = inputNum /10; i < 10; i++) {

        barArr.push('.')

    }
    console.log(inputNum+'% ['+barArr.join('')+']')
    console.log(inputNum === 100 ? '100% Complete!' : 'Still loading...')
}

loadingBarPrinter (50)