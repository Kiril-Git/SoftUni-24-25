function manipulatingMap (inputStr) {

let elsArr = inputStr.toLowerCase().split(' ')
let elsMap = new Map()


for (let el of elsArr) {
    elsMap.set(el, (elsMap.get(el) || 0) + 1)
}


let result = [...elsMap.entries()]
    .filter(([k, v]) => v % 2 !== 0)
    .map(([k]) => k)
    .join(' ')
    
    console.log(result)

}

manipulatingMap ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')







// Print:              c# php 1 5