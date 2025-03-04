function print(r,c){
    for(let i=1;i<=r;i++){
        let sum="";
        for(j=1;j<=c*2;j++){
        if(i%2==1){
          if(j%2==1){
            sum+="[]";
          }
          else{
            sum+=" ";
          }
        }
        else{
            if(j%2==0){
                sum+="[]";
              }
              else{
                sum+=" ";
              }
        }
    }
    console.log(sum);
    }
}
print(4,5);