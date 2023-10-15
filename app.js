
const pop_up = document.querySelector('#pop_up');
const btn_close = document.querySelector('#btn_close');
const link = document.querySelector('#link');
const tarjetas = document.getElementsByClassName('tajeta')

addEventListener('DOMContentLoaded', ()=>{
    pop_up.classList.remove('invisible');
})

btn_close.addEventListener('click', ()=>{
    pop_up.classList.add('invisible')
})

const voltear = ()=>{

}

console.log(tarjetas)