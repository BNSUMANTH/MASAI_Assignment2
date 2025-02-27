function print(user) {
    console.log( user["role"] =="admin" ?
        user["active"] ?
        user["experience"] > 5 ?
        user["department"] =="IT" ? "Full IT Admin Access" : "Full General Admin Access":
        "Limited Admin Access": "Admin Access Revoked":
        user["role"] =="manager" ?
        user["active"] ?
        user["experience"] > 3 ?
        user["department"] == "Sales" ? "Full Sales Manager Access" : "Full Manager Access":
        "Limited Manager Access": "Manager Access Revoked":
        user["role"] == "user" ?
        user["active"] ?
        user["department"] == "Support" ? "Priority Support Access" : "User Access":
        "User Access Revoked":
        "Invalid Role");
}

let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
print(person1);

let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
print(person2);

let person3 = { role: "user", experience: 2, active: true, department: "Support" };
print(person3);

let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };
print(person4);