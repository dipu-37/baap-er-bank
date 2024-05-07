
// click submit button and get id and password 

document.getElementById('button_submit').addEventListener('click',function(){
    // console.log('ok');

    const emailfield =document.getElementById('user_email')
    const email = emailfield.value;
   
    const passwordfield =document.getElementById('user_password')
    const passeord = passwordfield.value;
    console.log(email,passeord);


    if(email ==='dipu141@'  && passeord ==='secret'){
        console.log('valid user');
        // javascript click on button go to another html page 
        window.location.href = "bank.html";
    }
    else{
        alert('invalid user')
    }

    
    
 
})