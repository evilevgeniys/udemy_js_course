'use strict'

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')) { //Громоздко, но иногда требуется в ручную все проверять
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    //а можно так:
    btns[1].classList.toggle('red'); // проще, но не всегда возмонжо использовать в больших проектах...
})
//className - устаревший способ получения списка классов в виде строки. 

//Делегирование событий

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.tagName == "BUTTON"){
        console.log("Hello");
    } 
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
