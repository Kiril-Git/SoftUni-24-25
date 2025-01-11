function validatePassword(input){

    const PASSWORD = "s3cr3t!P@ssw0rd"

    let inputText = input[0]

    if(inputText === PASSWORD){
        console.log("Welcome")
    }
    else{
        console.log("Wrong password!")
    }
}

validatePassword (["s3cr3t!P@ssw0rd"])