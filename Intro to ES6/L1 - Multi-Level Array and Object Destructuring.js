function destructure(dict){
    let arr=[]
    for(let ele of dict){
        let ans=`${ele.name} lives in ${ele.address.city} on ${ele.address.street.name}`
        arr.push(ans)
    }
    return arr
}
const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]
console.log(destructure(people))