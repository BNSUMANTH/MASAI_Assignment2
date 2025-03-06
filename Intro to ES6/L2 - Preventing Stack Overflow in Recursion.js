function factorial(n){
    let ans=1
    if(n<0 || typeof(n)!="number"){
        return "Invalid Input"
    }
    else{
        if(n==0){
            return ans
        }
        return n*factorial(n-1)
        
    }
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(-3))
console.log(factorial("  "))
console.log(factorial("aswa"))
console.log(factorial(5))