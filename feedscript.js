
const   btnPost = document.querySelector('.post-btn');
const modalPost = document.querySelector('.modal-wrapper');
const modalBtnX = document.querySelector('.close');


btnPost.addEventListener('click',()=>{
    modalPost.style.display="block";
    console.log("yes")  
  


})

modalBtnX.addEventListener('click',()=>{
     modalPost.style.display="none";
})
