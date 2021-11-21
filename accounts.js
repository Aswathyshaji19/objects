var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]


  //qn 1. check 1005 exist or not
  var account_check=accounts.some(account=>account.acno==1002)
  console.log(account_check);


// qn  print all account numbers only
var all_account_nos=accounts.map(account=>account.acno)
console.log(all_account_nos);
//another method
accounts.forEach(account=>console.log(account.acno))

// print balance of 1002

var acc_balance=accounts.find(account=>account.acno==1002)
console.log(acc_balance.balance);

// another method

var acc_balance=accounts.filter(account=>account.acno==1002).map(account=>account.balance)
console.log(acc_balance);

// qn print transactions of 1001
var user_transn=accounts.find(account=>account.acno==1001)
console.log(user_transn.transactions);

// qn print transaction  of 1001: amount>500
  user_transn.transactions.filter(account=>account.amount>500).forEach(account =>console.log(account))
   var transaction_gt_amt=accounts.find(account=>account.acno==1001).transactions.filter(account=>account.amount>500)  
   console.log(transaction_gt_amt);



// payment history of acno 1000

// var debit=accounts. find(account=>account.acno==1000)
// console.log(debit);



    var debit_transaction=accounts.find(account=>account.acno==1000).transactions
    console.log(debit_transaction);
var credit_transaction=accounts.map(account=>account.transactions).flat().filter(trans=>trans.to==1000)
console.log(credit_transaction);
var payment_history=[]
debit_transaction.map(tran=>payment_history.push(tran))
credit_transaction.map(tran=>payment_history.push(tran))
console.log(payment_history);
//spread operator[...]
payment_history=[...debit_transaction,...credit_transaction]
console.log(payment_history);