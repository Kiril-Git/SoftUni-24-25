function catClassBuilder(inputArr) {


    class Cat {

        constructor(name, age) {
            this.name = name;
            this.age = age
        }

        
        meow() {
            console.log(this.name + ', age ' + this.age + ' says Meow')
        }
    }


    // let cats = []

    for (let el of inputArr) {

        let catArr = el.split(' ')
        let catName = catArr[0]
        let catAge = catArr[1]

        let cat = new Cat(catName, catAge)

        // cats.push(cat)

        cat.meow()
    }

}

catClassBuilder(['Mellow 2', 'Tom 5'])