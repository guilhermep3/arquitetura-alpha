// SCROLL HEADER
window.addEventListener('scroll', ()=>{
   let header = document.querySelector('header');
   header.classList.toggle('scrollHeader',window.scrollY > 1);
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
projectsJson.map((item, index)=>{
   let projectModel = qs('.project').cloneNode(true);

   projectModel.setAttribute('data-key', index);
   projectModel.querySelector('h3').innerHTML = item.name;
   projectModel.querySelector('img').src = item.img;
   projectModel.querySelector('.projectLocal').innerHTML = item.local;
   projectModel.querySelector('.projectYear').innerHTML = item.year;
   projectModel.querySelector('.projectSize').innerHTML = item.size;
   qs('.projects').append(projectModel);

});
qsa('#btnShowModal').forEach(btn => {
   btn.addEventListener('click', (e)=>{
      let key = e.target.closest('.project').getAttribute('data-key');
      qs('.modalLeft img').src = projectsJson[key].img;
      qs('.modalTitle').innerHTML = projectsJson[key].name;
      qs('.modalType').innerHTML = projectsJson[key].type;
      qs('.modalLocal').innerHTML = `<i class="bi bi-geo-alt"></i><span>LOCAL:</span> ${projectsJson[key].local}`;
      qs('.modalYear').innerHTML = `<i class="bi bi-calendar-check"></i><span>ANO:</span> ${projectsJson[key].year}`;
      qs('.modalSize').innerHTML = `<i class="bi bi-bounding-box"></i><span>TAMANHO:</span> ${projectsJson[key].size}`;
      renderColors(projectsJson[key]);
      renderImages(projectsJson[key]);

      qs('.modalArea').classList.add('showModal');
      qs('.modalArea').style.opacity = '0';
      setTimeout(() => {
         qs('.modalArea').style.opacity = '1';
      }, 10);
      qs('header').classList.add('hideHeader');
   });
});
qs('.closeModal').addEventListener('click', ()=>{
   qs('.modalArea').classList.remove('showModal');
   qs('header').classList.remove('hideHeader');
})
qs('.modalArea').addEventListener('click', (e)=>{
   if(e.target === e.currentTarget){
      qs('.modalArea').classList.remove('showModal');
   }
})
function renderColors(project){
   let modalColors = qs('.modalColors');
   modalColors.innerHTML = '';

   project.colors.forEach(color => {
       let colorSpan = document.createElement('span');
       colorSpan.style.backgroundColor = color;
       modalColors.appendChild(colorSpan);
   });
}
function renderImages(project){
   let modalSlide = qs('.modal-slide');
   modalSlide.innerHTML = '';

   project.images.forEach(image => {
      let imgEl = document.createElement('img');
      imgEl.src = image;
      modalSlide.append(imgEl);
      imgEl.addEventListener('click', (imgClicked)=>{
         let mainImg = document.querySelector('.mainImg');
         let mainImgSrc = document.querySelector('.mainImg').src;
         mainImg.src = imgClicked.target.src;
         imgClicked.target.src = mainImgSrc;
         mainImg.style.setProperty('--main-image-url', `url(${imgClicked.target.src})`);
         console.log(mainImg)
      });
   });
}
qsa('.projectInfo').forEach(evt => {
   evt.addEventListener('mouseover',()=>{
      evt.style.opacity = 1;
      evt.addEventListener('mouseout', ()=>{
         evt.style.opacity = 0;
      })
   })
});
// ECONOMIZE
const m2 = qs('#m2');
const calculate = qs('#calculate');
const resultCalc = qs('#resultCalc');
calculate.addEventListener('click', ()=>{
   let valorM2 = 0;
   if(m2.value <= 500){
      valorM2 = m2.value * 10000;
   } else if (m2.value <= 1000){
      valorM2 = m2.value * 20000
   } else {
      valorM2 = m2.value * 25000
   }
   let valorM2disc = valorM2 * 0.90
   let valorM2fix = valorM2.toLocaleString('pt-BR');
   let valorM2discfix = valorM2disc.toLocaleString('pt-BR')

   resultCalc.innerHTML = `Com nosso 10% de desconto, custaria em torno de <span>R$${valorM2discfix}</span> reais.<br/>sem nosso desconto seria <span>R$${valorM2fix}</span> reais.`;
   m2.value = '';
})

qs('.mobileHeader').addEventListener('click', ()=>{
   qs('.navMobile').classList.toggle('showNavMobile')
})