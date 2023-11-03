const imgppl = document.querySelector('#imgppal');
const mosaico = document.querySelector('#mosaico');
const contenedor = document.querySelector('#imagenes_mesas')
const mo_after = document.querySelector('#imagenes_mesas::after')
mosaico.addEventListener('click',swap)

function swap(e){
    temp= e.target.src
    e.target.src = imgppl.src;
    imgppl.src = temp; 
}

function mostrarfotos(value){
    imgppl.src = "../images/m_"+value+"/"+1+".png";
    color = `var(--color_${value})`;
    document.documentElement.style.setProperty('--colorAfter', color);
    for (let cont= 0; cont < 4; cont++) {
        mosaico.children[cont].src= "../images/m_"+value+"/"+(cont+2)+".png" ;
    }   
}

