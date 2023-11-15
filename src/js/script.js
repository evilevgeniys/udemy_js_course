'use strict'

const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function logger(){
    if(i == 3){
        clearInterval(timerId);
        i = 0;
    }
    console.log('text')
    i++;
}

btn.addEventListener('click', () => {
    timerId = setInterval(logger, 500);
})


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);



    function frame() {
        if(pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

}

btn.addEventListener('click', myAnimation);
