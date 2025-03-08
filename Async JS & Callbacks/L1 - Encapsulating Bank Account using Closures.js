function createBankAccount(amount){
    let balance=0
    balance+=amount
    return {
        deposit : function (amount1){
            balance+=amount1 
            return balance
        },
        withdraw : function (amount2){
            balance-=amount2 
            return balance
        },
        getbalance : function (){
            return balance
        }
    }

}
let amount =createBankAccount(100)
console.log(amount.deposit(50))
console.log(amount.withdraw(30))
console.log(amount.getbalance())