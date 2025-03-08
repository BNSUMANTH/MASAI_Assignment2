function outerFunction(){
    let message="Hi Sumanth"
    return function innerFunction()
    {
        console.log(message)
    }
    return innerFunction
}
let answer=outerFunction()
answer()