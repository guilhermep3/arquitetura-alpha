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
qsa('#btnShowModal').forEach(btn => {
   btn.addEventListener('click', (e)=>{
      let key = e.target.closest('.project').getAttribute('data-key');
      qs('.modalLeft img').src = projectsHomeJson[key].img;
      qs('.modalTitle').innerHTML = projectsHomeJson[key].name;
      qs('.modalType').innerHTML = projectsHomeJson[key].type;
      qs('.modalLocal').innerHTML = `<i class="bi bi-geo-alt"></i><span>LOCAL:</span> ${projectsHomeJson[key].local}`;
      qs('.modalYear').innerHTML = `<i class="bi bi-calendar-check"></i><span>ANO:</span> ${projectsHomeJson[key].year}`;
      qs('.modalSize').innerHTML = `<i class="bi bi-bounding-box"></i><span>TAMANHO:</span> ${projectsHomeJson[key].size}`;
      renderColors(projectsHomeJson[key]);
      renderImages(projectsHomeJson[key]);

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
function renderColors(project){
   let modalColors = qs('.modalColors');
   modalColors.innerHTML = ''; // Limpa qualquer conteúdo anterior

   project.colors.forEach(color => {
       let colorSpan = document.createElement('span'); // Cria um novo span para cada cor
       colorSpan.style.backgroundColor = color; // Define a cor de fundo do span
       modalColors.appendChild(colorSpan); // Adiciona o span ao contêiner
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
      });
   });
}

// ECONOMIZE
const m2 = qs('#m2');
const calculate = qs('#calculate');
const resultCalc = qs('#resultCalc');
calculate.addEventListener('click', ()=>{
   let valorM2 = m2.value * 8000;
   let valorM2disc = valorM2 * 0.90
   let valorM2fix = valorM2.toLocaleString('pt-BR');
   let valorM2discfix = valorM2disc.toLocaleString('pt-BR')

   resultCalc.innerHTML = `Com nosso 10% de desconto custaria em torno de <span>R$${valorM2discfix}</span> reais.<br/>sem nosso desconto seria <span>R$${valorM2fix}</span> reais.`;
   m2.value = '';
})


window.sr = ScrollReveal({reset:true})
sr.reveal('.scrollTop',{
   duration: '1000',
   distance: '100px',
   origin: 'top'
})
sr.reveal('.scrollBottom',{
   duration: '1000',
   distance: '100px',
   origin: 'bottom'
})
sr.reveal('.scrollLeft',{
   duration: '1000',
   distance: '100px',
   origin: 'left'
})
sr.reveal('.scrollRight',{
   duration: '1000',
   distance: '100px',
   origin: 'right'
})
sr.reveal('.scrollD100',{
   duration: '1000',
   distance: '100px',
   origin: 'top',
   delay: '100'
})
sr.reveal('.scrollD200',{
   duration: '1000',
   distance: '100px',
   origin: 'top',
   delay: '200'
})
sr.reveal('.scrollD300',{
   duration: '1000',
   distance: '100px',
   origin: 'top',
   delay: '300'
})
sr.reveal('.bi-facebook',{
   duration: 1000,
   distance: '90px',
   origin: 'top',
   delay: 100
})
sr.reveal('.bi-instagram',{
   duration: 1000,
   distance: '90px',
   origin: 'top',
   delay: 200
})
sr.reveal('.bi-youtube',{
   duration: 1000,
   distance: '90px',
   origin: 'top',
   delay: 300
})
sr.reveal('.bi-pinterest',{
   duration: 1000,
   distance: '90px',
   origin: 'bottom',
   delay: 400
})
sr.reveal('.bi-linkedin',{
   duration: 1000,
   distance: '90px',
   origin: 'bottom',
   delay: 500
})

qs('.mobileHeader').addEventListener('click', ()=>{
   qs('.navMobile').classList.toggle('showNavMobile')
})