function identifyType(input) {

    let parameterType = typeof(input)



    console.log(parameterType)

    if(parameterType === 'string' || parameterType === 'number'){
        console.log(input)
    }
    else {
    console.log('Parameter is not suitable for printing')
    }
}

identifyType(null)