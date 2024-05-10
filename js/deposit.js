document.getElementById('buttondiposit').addEventListener('click', function(){

    // take value in input field 
    const dipositfield = document.getElementById('diposit_field');
    const  newdepositamount_string = dipositfield.value ;
    const newdepositamount = parseFloat(newdepositamount_string);
    console.log(typeof newdepositamount);
    console.log(newdepositamount);

    // get the deposit total amount 
    const deposittotalelement = document.getElementById('deposit_tottal');
    const previous_deposittotal_string = deposittotalelement.innerText
    const previous_deposittotal = parseFloat(previous_deposittotal_string);

    console.log(typeof previous_deposittotal);
    console.log(previous_deposittotal);

    // sum to new and previous 
    const currentDepositTotal = newdepositamount + previous_deposittotal;
    deposittotalelement.innerText = currentDepositTotal

    // get ballence total  

// clear input field 
      dipositfield.value=''



// get balance and update balance 

      const balance = document.getElementById('balance_total');
const previousbalancestring = balance.innerText;
console.log(previousbalancestring)
const priviousbalance = parseFloat(previousbalancestring);

console.log(typeof priviousbalance)
console.log(balance.innerText);
const current_balance_total = newdepositamount + priviousbalance; 
balance.innerText=current_balance_total;

})


 




