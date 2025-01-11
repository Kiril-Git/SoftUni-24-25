function printNumberPyramid(n) {

    let col = 0

    for (let i = 1; i <= n; ){

         col++
         let line = ""

        for (let j = 1; j <= col; j++){
        
            line += i + " ";
            i++
            
            if (i > n){
                break
            } 
        }
        console.log(line.trim())
    }
}

printNumberPyramid(12)