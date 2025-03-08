function inventory_Manage_System(arr){
    let resOfFilter = arr .filter((ele)=>(ele.stock<100))
    // console.log(resOfFilter)
    let resOFMap = resOfFilter.map((ele)=>{
        return {name:ele.name,category:ele.category,reOrderCost:ele.pricePerUnit*(100-ele.stock)}
    })
    // console.log(resOFMap)
    let final = resOFMap.reduce((a,b)=>{
        if(!a[b.category]){
            a[b.category]=0
        }
        a[b.category]+=b.reOrderCost 
        return a
    },{})
    // console.log(final)
    for(let ele of Object.keys(final)){
        let ans= `"${ele}"`+":"+final[ele] 
        console.log(ans)
    }
}
// console.log("Test Case 1")
Input = [

    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } ]
inventory_Manage_System(Input)
// console.log("Test Case 2")
Input1 = [

    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    
    { name: "Jeans", category: "Clothing", stock: 80, pricePerUnit: 40 },
    
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } ]
inventory_Manage_System(Input1)