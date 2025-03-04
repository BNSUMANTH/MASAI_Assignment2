function print(n){
    for(let  i=0;i<n;i++){
        let sum="";
    if(i==n-1){
        let m=Math.ceil(2*i)/2;
        sum=" ".repeat(m+1)+"|";
    }
    else{
     sum=" ".repeat(n-i)+"*".repeat(2*i+1);
    }
     console.log(sum)
    
    }
}
print(7)