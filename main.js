const revealBtn = document.querySelectorAll(".question");
console.log(revealBtn)

// revealBtn.forEach(function(faq){
//   console.log(faq)
//   faq.addEventListener("click", (e) => {
//     faq.classList.toggle("active")
//   });
// });

for(let i = 0; i <= revealBtn.length; i++){
  revealBtn[i].addEventListener("click", (e) => {
    revealBtn[i].classList.toggle("active")
  });
}





// function revealContent(){
//   if(revealBtn.classList.contains("active")){
//     revealBtn.classList.remove("active");
//   }else{
//     revealBtn.classList.add("active");
//   }
// }

// for(let i = 0; i < 5; i++){
//   revealBtn[i].addEventListener("click", revealContent); 
// }