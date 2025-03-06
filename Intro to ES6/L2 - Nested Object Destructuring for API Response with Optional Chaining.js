function chaining(dict){
    if(dict?.id==undefined){
        dict.id="Information not available"
    }
    if(dict?.profile==undefined){
        dict.profile={}
    }
    if(dict?.profile?.name===undefined){
        dict.profile.name="Information not available" 
    }
    if(dict?.profile?.address==undefined){
        dict.profile.address={}
        if(dict?.profile?.address?.city==undefined){
            dict.profile.address.city="Information not available"
        }
        if(dict?.profile?.address?.zipcode==undefined){
            dict.profile.address.zipcode="Information not available"
        }
    }
    let {id,profile:{name,address:{city,zipcode}}}=dict
    let ans = `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`
    console.log(ans)
    // User John Doe (ID: 123) lives in Information not available (ZIP: Information not available)"
}
const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } }
chaining(user)
const user1 = { id: 123, profile: { name: "John Doe" } };

chaining(user1)