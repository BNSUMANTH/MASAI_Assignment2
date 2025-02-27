function print(age){
    console.log(age<=0?"Invalid Age":(age>=60?"Eligible for Senior Discount":"Not Eligible for Senior Discount"));
}
print(65);
print(-1);