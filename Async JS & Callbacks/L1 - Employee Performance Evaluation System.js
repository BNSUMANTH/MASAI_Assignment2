function employeePerformance(arr){

    let ansOffilter = arr.filter((ele)=>(ele.tasksCompleted>5))
    // console.log(ansOffilter)
    let ansOfmap = ansOffilter.map((ele)=>{
        if (ele.rating>4.5){
            return {name:ele.name,performance:"Excellent"}
        }
        else if(ele.rating>3 && ele.rating<=4.5){
            return {name:ele.name,performance:"Good"}
        }
        else {
            return {name:ele.name,performance:"Needs Improvement"}
        }
    })
    ansOfmap.sort((a,b)=>( a.performance.localeCompare(b.performance.localeCompare)))
    console.log(ansOfmap)
}
Input= [

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 3, rating: 2.8 }
    
    ]
employeePerformance(Input)
Input1= [

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]
employeePerformance(Input1)