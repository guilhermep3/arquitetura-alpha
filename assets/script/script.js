const qs = (el)=>document.querySelector(el);
const qsa = (el)=>document.querySelectorAll(el);

// SLIDE
let totalSlides = document.querySelectorAll('.sliderImg').length;
let currentSlide = 0;

document.querySelector('.sliderImages').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.sliderControls').style.height = `${document.querySelector('.sliderArea').clientHeight}px`;

function goPrev(){
   currentSlide--;
   if(currentSlide < 0){
      currentSlide = totalSlides - 1;
   }
   updateMargin();
}
function goNext(){
   currentSlide++;
   if(currentSlide > (totalSlides - 1)){
      currentSlide = 0;
   }
   updateMargin();
}
function updateMargin(){
   let sliderImgWidth = document.querySelector('.sliderImg').clientWidth;
   let newMargin = (currentSlide * sliderImgWidth);
   document.querySelector('.sliderImages').style.marginLeft = `-${newMargin}px`;
}
setInterval(goNext, 5000);

// SCROLL HEADER
window.addEventListener('scroll', ()=>{
   let header = document.querySelector('header');
   header.classList.toggle('scrollHeader',window.scrollY > 200);
})

// TEAM.JS
personsJson.map((item, index)=>{
   let personModel = qs('.personModel').cloneNode(true);

   personModel.setAttribute('data-key', index);
   personModel.querySelector('.personImg').src = item.img;
   personModel.querySelector('.personName').innerHTML = item.name;
   personModel.querySelector('.personLoad').innerHTML = item.load;
   qs('.team').append(personModel);
})