function createBankAccount(amount){
    return {
        deposit : function (amounttobedeposit){
                amount+=amounttobedeposit
                return ("Deposited ₹"+amounttobedeposit+". New balance: ₹"+amount)
        },
        withdraw: function (balance){
            if(amount<balance){
                return ("Insufficient funds")
            }
            else{
                amount = amount-balance 
                return ("Withdrew ₹"+balance+". New balance: ₹"+amount)
            }
        },
        getBalance : function (){
            return ("Current balance: ₹"+amount)
        }
    }

}
const myAcc = createBankAccount(1000);  
console.log(myAcc.deposit(500));  
console.log(myAcc.withdraw(200));  
console.log(myAcc.withdraw(1500)); 
console.log(myAcc.getBalance());  
console.log(myAcc.deposit(1000)) 