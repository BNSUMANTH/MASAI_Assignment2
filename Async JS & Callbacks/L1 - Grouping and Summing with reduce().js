function objectOfarray(arr){
    let ans = arr . reduce((a,b)=>{
        if(a[b]==undefined){
            a[b]=1
        }
        else {
        a[b]++} 
        return a 
    },{})
    console.log(ans) 

    let newarr = []
    for(let ele of Object.entries(ans)){
        newarr.push(ele)
    }
    console.log(newarr) 
    newarr.sort((a,b)=>(b[1]-a[1]))
    console.log(newarr)
}
Input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
objectOfarray(Input)