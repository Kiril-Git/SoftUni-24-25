function readWordsUntilStop(input) {

    while(true){

        let temp = input.shift()

        if (temp === "Stop"){
            break
        }
        console.log(temp)
    }
}

readWordsUntilStop(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])