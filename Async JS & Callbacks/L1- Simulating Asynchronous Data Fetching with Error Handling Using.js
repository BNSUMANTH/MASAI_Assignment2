function fetchData(){
    let dict = new Promise((res,rej)=>{
        setTimeout(()=>{
            let value = Math.random() 
            if(value>0.5){
                res("Fetched Data Successfully!")
            }
            else{
                rej("Error fetching data")
            }
        })
    })
    function fetchDataHandler(){
        dict
        .then((result)=>{
            console.log(result+". value is greater then 0.5")
        })
        .catch((result)=>{
            console.log(result+". Because Value is lesser then 0.5. So not able to fetch the data" )
        })
    }
    fetchDataHandler()
}
fetchData()