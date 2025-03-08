function processProducts(dict){
    let ans = dict.map((ele)=>(ele.name))
    console.log(ans)
    dict.forEach((ele)=>{
        if(ele.price>50){
            console.log(`${ele.name} is above $${ele.price}`)
        }
        else{
            console.log(`${ele.name} is below $${ele.price}`)
        }
    })
}
Input = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
processProducts(Input)