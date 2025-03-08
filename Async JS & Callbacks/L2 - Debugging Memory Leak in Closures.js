function createHeavyDataHandler() {

    let largeData = new Array(1000000).fill(0); // Large data array
    
    return {
    
    processData: function () {
        if (largeData.length>0){
        console.log("Processing data of size:", largeData.length)
        }
        else {
            console.log("Not able to processing the data. Because there is no data to process.The length of the largeData is:",largeData.length)
        }
    },  
    
    clearData: function () {
        largeData=[]
        // console.log("Clearing data");
        console.log(largeData.length)
        // largeData = null; // Attempt to free memory 
    } 
    }
}
const handler = createHeavyDataHandler();

handler.processData(); // Output: Processing data of size: 1000000
handler.clearData();    // Output: Clearing data
handler.processData();
// Despite clearing the data, memory usage remains high. Why is that?