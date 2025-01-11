var isPalindrome = function(x) {
    let num = x.toString()

    for (let i = 0; i <= num.length/2; i++) {

        if(num[i] !== num[num.length - i - 1]) {
            return false
        }
    }
    return true
}