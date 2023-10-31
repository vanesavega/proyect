const proyectos_contenedor = document.querySelector('#projects_list');
const main = document.querySelector('.main');
const ventanaModal = document.querySelector('#ventana_modal');
const contenido_vmd = document.querySelector('#modal_content')

function tarjeta(){

}

document.addEventListener('DOMContentLoaded', () => {
    mostrarproyectos(listadeproyectos);
});

proyectos_contenedor.addEventListener('click', mostrarVentana)


function mostrarproyectos(projects){
    projects.forEach(proyecto => {
        const {titulo_ppal,imagen_ppal} = proyecto;
        const contenedor = document.createElement('div')
        const title = document.createElement('H5');
        const img_background = document.createElement('IMG')
    
        
        contenedor.classList.add('project_mosaico_content', 'project_mosaico_content:hover');
        title.innerText = titulo_ppal;
        title.classList.add('project_mosaico_text');
        img_background.src = imagen_ppal+'.png';
        img_background.classList.add('project_mosaico_img');

        contenedor.appendChild(img_background)
        contenedor.appendChild(title);
        proyectos_contenedor.appendChild(contenedor)
        
        contenedor.id='proyecto_'+titulo_ppal;    
    })
}

function mostrarVentana(e){
    let proyectoenHTML = e.target.parentElement;
    limpiar_contenido_vmd();
    listadeproyectos.forEach(proyecto =>{
        if(String(proyectoenHTML.id) === ('proyecto_'+proyecto.titulo_ppal)){
            construirModal(proyecto)
        }else{
            return; 
        }
    });
    
}

function construirModal(proyecto){
    const titulo = document.createElement('H1');
    titulo.innerText = proyecto.titulo_ppal;
    contenido_vmd.appendChild(titulo);

    proyecto.adecuaciones.forEach(adec => {
        const {subtitulo, descripcion, imagenes} = adec ; 
        let subtitulo_vmd = document.createElement('H2');
        let descripcion_vmd = document.createElement('H4');
        let imagenes_vmd = document.createElement('div')

        for (const imgs of imagenes) {
            let imagen = document.createElement('IMG');
            imagen.src = imgs +'.png'

            imagen.classList.add('modal_img')
            imagenes_vmd.appendChild(imagen);
        }

        subtitulo_vmd.textContent = subtitulo;
        descripcion_vmd.textContent = descripcion; 

        contenido_vmd.append(subtitulo_vmd,descripcion_vmd,imagenes_vmd);
    })  
    ventanaModal.classList.remove('invisible');
    main.classList.add('modal_active')
};


function limpiar_contenido_vmd(){
    let cont = contenido_vmd.children.length; 
    while(cont >= 1){
        contenido_vmd.removeChild(contenido_vmd.lastElementChild)
        cont--;
    }
}

function closemodal(){
    ventanaModal.classList.add('invisible')
    main.classList.remove('modal_active')
}

function changemodal(direccion){
    let titulo = contenido_vmd.firstChild.textContent
    let condition = (tit) => tit.titulo_ppal===titulo ;
    let position = listadeproyectos.findIndex(condition)
    let cantidad = listadeproyectos.length;

    if(direccion==='adelante'){
        limpiar_contenido_vmd();
        if ((position+1)<cantidad) {
            construirModal(listadeproyectos[position+1]);
        }else(
            construirModal(listadeproyectos[0])
        ) 
    }else if (direccion === 'atras') {
        limpiar_contenido_vmd();
        if (position>0) {
            construirModal(listadeproyectos[position-1]);
        }else(
            construirModal(listadeproyectos[cantidad-1])
        ) 
    }
}
