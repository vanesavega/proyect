
const pop_up = document.querySelector('#pop_up');
const btn_close = document.querySelector('#btn_close');
const link = document.querySelector('#link');
const main = document.querySelector('.main')
//------------------- pop up  -----------------------------------------------------
addEventListener('DOMContentLoaded', ()=>{
    main.classList.add('blur_active');
    pop_up.classList.remove('invisible');
})

btn_close.addEventListener('click', ()=>{
    pop_up.classList.add('invisible')
    main.classList.remove('blur_active')

})
// ---------------- tarjeta -------------------------------------------------------

function voltear(e,value){
    if(value===1){
        e.lastElementChild.classList.add('invisible')
        e.lastElementChild.classList.remove('side2')
        e.firstElementChild.classList.remove('invisible')
    }
    if (value === 2) {
        e.firstElementChild.classList.add('invisible')
        e.lastElementChild.classList.add('side2')
        e.lastElementChild.classList.remove('invisible')
    }    
}
