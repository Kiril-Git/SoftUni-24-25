function generateEmplObj (inputArr) {


   let employees = []

   for (let el of inputArr) {

    let employee = {

        emplName: el,
        id: el.length
    } 

    employees.push(employee)    
     
    // console.log(`Name: ${employee.emplName} -- Personal Number: ${employee.id}`)

    }


    for (let el of employees) {
        console.log(`Name: ${el.emplName} -- Personal Number: ${el.id}`)
    }

}

generateEmplObj([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ] )





//  Print:                      Name: Silas Butler -- Personal Number: 12
//                              Name: Adnaan Buckley -- Personal Number: 14
//                              Name: Juan Peterson -- Personal Number: 13
//                              Name: Brendan Villarreal -- Personal Number: 18