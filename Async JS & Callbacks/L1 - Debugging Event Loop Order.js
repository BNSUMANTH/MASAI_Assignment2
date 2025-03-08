console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); 
}, 0); 
Promise.resolve().then(() => { 
    console.log("Promise Task"); 

}); 
console.log("End");
//code is correct fallow the same order
// 1 Begin
// 2 End
// 3 Promise Task
// 4 Timeout Task