// SCROLL HEADER
window.addEventListener('scroll', ()=>{
   let header = document.querySelector('header');
   header.classList.toggle('scrollHeader',window.scrollY > 200);
});
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
};
function goNext(){
   currentSlide++;
   if(currentSlide > (totalSlides - 1)){
      currentSlide = 0;
   }
   updateMargin();
};
function updateMargin(){
   let sliderImgWidth = document.querySelector('.sliderImg').clientWidth;
   let newMargin = (currentSlide * sliderImgWidth);
   document.querySelector('.sliderImages').style.marginLeft = `-${newMargin}px`;
}
setInterval(goNext, 5000);



// PERSONS.JSON
personsJson.map((item, index)=>{
   let personModel = qs('.personModel').cloneNode(true);

   personModel.setAttribute('data-key', index);
   personModel.querySelector('.personImg').src = item.img;
   personModel.querySelector('.personName').innerHTML = item.name;
   personModel.querySelector('.personLoad').innerHTML = item.load;
   qs('.team').append(personModel);
});

// PROJECTS.JSON
projectsHomeJson.map((item, index)=>{
   let projectModel = qs('.project').cloneNode(true);

   projectModel.setAttribute('data-key', index);
   projectModel.querySelector('h3').innerHTML = item.name;
   projectModel.querySelector('img').src = item.img;
   projectModel.querySelector('.projectLocal').innerHTML = item.local;
   projectModel.querySelector('.projectYear').innerHTML = item.year;
   projectModel.querySelector('.projectSize').innerHTML = item.size;
   qs('.projects').append(projectModel);
});

// ECONOMIZE
const m2 = qs('#m2');
const calculate = qs('#calculate');
const resultCalc = qs('#resultCalc');
calculate.addEventListener('click', ()=>{
   let valorM2 = m2.value * 5000;
   let valorM2disc = valorM2 * 0.90
   let valorM2fix = valorM2.toLocaleString('pt-BR');
   let valorM2discfix = valorM2disc.toLocaleString('pt-BR')

   resultCalc.innerHTML = `Com nosso 10% de desconto custaria em torno de <span>R$${valorM2discfix}</span> reais.<br/>sem nosso desconto seria <span>R$${valorM2fix}</span> reais.`;
})