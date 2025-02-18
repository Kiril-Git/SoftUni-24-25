function personInfo (firstName, lastName, age) {


    let person = {

        firstName,
        lastName,
        age

    }

    // person = `firstName: ${person.firstName}\nlastName: ${person.lastName}\nage: ${person.age}`

    return person
    
}


console.log(personInfo("Peter", "Pan", "20" ))

