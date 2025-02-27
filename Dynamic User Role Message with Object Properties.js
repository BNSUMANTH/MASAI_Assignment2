function print(user){
   console.log( user["role"]=="admin"?
    user["active"]==true?"Admin Access Granted!":"Admin Access Revoked":
    user["role"]=="user"?
    user["active"]==true?"User Access Granted!":"User Access Revoked":
    "Access Denied");

}
let user = { name: "Alice",role: "admin", active: false };
print(user);
let user2 = { name: "Bob", role: "user", active: true };
print(user2);