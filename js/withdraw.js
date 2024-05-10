document.getElementById('withdraw_button_submit').addEventListener('click',function(){
    const inputfiel = document.getElementById('input_field_withdraw');
    const inputfieldvalue_string = inputfiel.value;
    const inputfieldvalue = parseFloat(inputfieldvalue_string);
    //  console.log(typeof inputfieldvalue);
     console.log(inputfieldvalue);

     const withdrawtotal = document.getElementById('withdraw_total');
     const withdrawtotal_string = withdrawtotal.innerText;
     const withdraw_total_num = parseFloat(withdrawtotal_string);
     console.log(withdraw_total_num);

//  get balance total 
const balance = document.getElementById('balance_total');
const previousbalancestring = balance.innerText;

const priviousbalance = parseFloat(previousbalancestring);
console.log(priviousbalance) 

// withdraw balance is greater than main balance 
if(inputfieldvalue > priviousbalance){
    alert('baap ar bank a ato taka nai');
    return;
 }

     const current_withdraw = inputfieldvalue + withdraw_total_num;
     console.log(current_withdraw)

     withdrawtotal.innerText = current_withdraw;

     inputfiel.value =''

    
const current_balcancr = priviousbalance - inputfieldvalue;
balance.innerText = current_balcancr;



})