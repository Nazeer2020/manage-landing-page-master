"use strict"

// Getting the DOM elements

const track = document.querySelector(".slide__track");
const slide = Array.from(track.children);
const dotNav = document.querySelector(".testimonial__nav");
const dots = Array.from(dotNav.children);
const barBtn = document.querySelector(".fa-bars");
const mobileNav = document.querySelector(".mobile__nav");
const footerBtn = document.querySelector(".footer_btn")
const footerInput = document.querySelector(".footer__input")
// adding widht to slides

const slideWidth = slide[0].getBoundingClientRect().width;
 for (let i = 0; i < slide.length; i++) {
     
    slide[i].style.left = slideWidth * i + "px";
     
 }

  
//  main function of slide


 const moveToSlide = (track, currentSlide, targetSlide)=>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current__slide");
    targetSlide.classList.add("current__slide");
 }

//  Event listener for dots buttons

 dotNav.addEventListener("click", e =>{
     const targetDot = e.target.closest("button");
     if(!targetDot) return;
     const currentSlide = track.querySelector(".current__slide");
     const currentDot = dotNav.querySelector(".testimonial__btn--active");
     const targetIndex = dots.findIndex( dot => dot === targetDot);
     const targetSlide = slide[targetIndex];
     moveToSlide(track, currentSlide, targetSlide)
     currentDot.classList.remove("testimonial__btn--active");
     targetDot.classList.add("testimonial__btn--active");
    
 })


//  Mobile Nav event listener


barBtn.addEventListener("click", ()=>{
   mobileNav.classList.toggle("show");
   barBtn.classList.toggle("fa-times");
   document.body.classList.toggle("opacity")

})


//  when page loades display the second slide


window.onload = ()=>{
  
   const currentSlide = track.querySelector(".current__slide");
   const targetSlide = slide[1];
   moveToSlide(track, currentSlide, targetSlide)
}


// email validtion function


footerBtn.addEventListener("click", ()=>{
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(footerInput.value))
 {
   
 } else {
   document.querySelector(".footer__span").classList.toggle("show")
   footerInput.style.border = "2px solid red";
 }
  
});

