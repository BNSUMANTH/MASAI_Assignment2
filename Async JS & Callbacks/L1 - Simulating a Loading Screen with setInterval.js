let c=0;
let id=setInterval(()=>{
    if(c<5){
        console.log("Loading....");
    }
    else if(c==5){
        clearInterval(id);
        console.log("Loaded successfully");
    }
    c++;
},1000);