function onComplete(time){
    let ans = "Timer of "+time+" ms finished"
    console.log(ans)
}

function timer(duration,callback){
    setTimeout(()=>{
        callback(duration)// calling callback function with prameter duration
    },duration)
}
timer(2000,onComplete)
timer(1000,onComplete)