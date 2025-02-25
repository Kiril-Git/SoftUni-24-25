function classExercises () {


    class Laptop {

        constructor (info, quality) {

            this.info = {
                producer: info.producer,
                age: info.age,
                brand: info.brand
            }
            this.quality = quality
            this.isOn = false

        }



        turnOn() {
            this.isOn = true
            this.quality -= 1
        }

        turnOff() {
            this.quality -= 1
            this.isOn = false
        }

        showInfo() {

            let infoJsn = JSON.stringify(this.info)
            return infoJsn
        }

        get price() {

            return 800 - this.info.age * 2 + this.quality * 0.5
        }
    }





    let info = {producer: "Dell", age: 2, brand: "XPS"}
    let laptop = new Laptop(info, 10)

    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()


    console.log(laptop.isOn)
    console.log(laptop.price)

}

classExercises()