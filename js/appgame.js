const imgppl = document.querySelector('#imgppal');
const mosaico = document.querySelector('#mosaico');
const contenedor = document.querySelector('.imagenes_mesas')

mosaico.addEventListener('click',swap)

function swap(e){
    temp= e.target.src
    e.target.src = imgppl.src;
    imgppl.src = temp; 
}

function mostrarfotos(value){
    imgppl.src = "../images/m_"+value+"/"+1+".png";
    contenedor.style.background = 'linear-gradient(0deg, #03ca14 12.48%, #b6542d 47.55%, #86a015 83.54%)'
    for (let cont= 0; cont < 4; cont++) {
        mosaico.children[cont].src= "../images/m_"+value+"/"+(cont+2)+".png" ;
    }   
}

