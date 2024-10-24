const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);
      let validator = {
         handleSubmit: (evt) => {
            evt.preventDefault();
            let send = true;
            let inputs = form.querySelectorAll('input');
            validator.clearErrors();
            for (let i=0; i<inputs.length; i++) {
               let input = inputs[i];
               let check = validator.checkInput(input);
               if (check !== true) {
                  send = false;
                  validator.showError(input, check);
               }
            }

            if (send) {
               evt.stopPropagation();
               qs('.modalNone').style.opacity = 0;
               qs('.modalNone').style.display = 'flex';
               setTimeout(() => {
                  qs('.modalNone').style.opacity = 1;
               }, 100);
               qs('.confirm').addEventListener('click', ()=>{
                  qs('.modalNone').style.opacity = 0;
                  setTimeout(() => {
                     qs('.modalNone').style.display = 'none';
                  }, 100);
                  form.submit();
               });
            }
         },
         checkInput: (input) => {
            let rules = input.getAttribute('data-rules');
            if (rules !== null) {
               rules = rules.split('|');
               for (let k in rules) {
                  let rDetails = rules[k].split('=');
                  switch (rDetails[0]) {
                     case 'required':
                        if (input.value == '') {
                           return 'Este campo é obrigatório';
                        }
                        break;
                     case 'min':
                        if(input.value.length < rDetails[1]){
                           return `É obrigatório no minimo ${rDetails[1]} caracteres`
                        }
                        break;
                     case 'email':
                        if(input.value != ''){
                           let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                           if(!regex.test(input.value.toLowerCase())){
                              return 'Email não validado'
                           }
                        }
                        break;
                  }
               }
            }
            return true
         },
         showError: (input, error) => {
            input.style.borderColor = '#b50505';
            let errorEl = document.createElement('div');
            errorEl.classList.add('error');
            errorEl.innerHTML = error;
            input.parentElement.insertBefore(errorEl, input.elementSibling);
         },
         clearErrors:()=>{
            let inputs = form.querySelectorAll('input');
            for(let i=0; i<inputs.length; i++){
               inputs[i].style = '';
            }
            let errorEls = qsa('.error');
            for(let i=0; i<errorEls.length; i++){
               errorEls[i].remove();
            }
         }
      }
      let form = qs('.validator')
      form.addEventListener('submit', validator.handleSubmit)