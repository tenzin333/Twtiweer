
const btnLogin =document.querySelector('.btn-top');

btnLogin.addEventListener('click',()=>{
    const inputUserinfo = document.querySelector('.user-info');
    const inputpassword = document.querySelector('.password');

    console.log(inputUserinfo.value)



        if(inputUserinfo.value !== "" && inputpassword.value !==""){
            window.location='feeds.html';
        }
         else{
             alert("fields are empty");
         }   
         


})