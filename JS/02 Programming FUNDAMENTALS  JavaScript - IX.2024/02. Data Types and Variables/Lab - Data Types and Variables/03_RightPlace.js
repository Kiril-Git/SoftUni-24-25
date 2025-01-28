function stringManipulator (first, replacement, second) {

let modifiedWord = first.replace('_', replacement)

let result = modifiedWord === second ? 'Matched' : 'Not Matched'        //    ? Teranry operator

console.log(result)

}

stringManipulator('Str_ng', 'o', 'Strong')