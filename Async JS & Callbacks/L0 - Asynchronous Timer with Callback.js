function onComplete(time){
    console.log("Timer of "+time+" ms finished")
}
function timer(duration,callback){
    setTimeout(()=>{
      console.log('countdown')
      callback(duration)
    },duration)
}
timer(1000,onComplete)