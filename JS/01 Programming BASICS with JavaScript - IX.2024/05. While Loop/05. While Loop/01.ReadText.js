function readWordsUntilStop(input) {

    let index = 0
    let temp = input[index]


    while(temp !== "Stop"){

        console.log(temp)
        index++
        
        temp = input[index]
    }
}

readWordsUntilStop(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])