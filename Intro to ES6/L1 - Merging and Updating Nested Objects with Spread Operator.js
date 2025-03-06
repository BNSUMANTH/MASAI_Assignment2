function spread(profile,updates){
    let ans={
        ...profile,age:updates.age,address:{...profile.address,...updates.address}
    }
    return ans
}
const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
console.log(spread(profile,updates))