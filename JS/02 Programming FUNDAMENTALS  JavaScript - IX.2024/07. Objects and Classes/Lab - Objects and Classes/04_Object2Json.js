function printObject2Json(name, lastName, hairColor) {

    

    let person = {

        name,
        lastName,
        hairColor
    }

    let jsonStr = JSON.stringify(person)




    console.log(jsonStr)

}

printObject2Json ('George', 'Jones', 'Brown')



// print:              {"name":"George","lastName":"Jones","hairColor":"Brown"}
//
