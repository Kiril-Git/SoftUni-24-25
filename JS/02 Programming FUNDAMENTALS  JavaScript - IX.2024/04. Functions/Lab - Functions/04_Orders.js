function orderCalculator(product, quantity) {

const operations = {

coffee: () => quantity *  1.50,
water: () => quantity * 1,
coke: () => quantity *  1.40, 
snacks: () => quantity *  2, 
}

return operations[product]().toFixed(2)


}

console.log(orderCalculator("coffee", 2))

