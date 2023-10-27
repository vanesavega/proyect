const proyectos_contenedor = document.querySelector('#projects_list');
const ventanaModal = document.querySelector('#ventana_modal');


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
        img_background.src ='../'+imagen_ppal+'.png';
        img_background.classList.add('project_mosaico_img');

        
        contenedor.appendChild(img_background)
        contenedor.appendChild(title);
        proyectos_contenedor.appendChild(contenedor)
        
        contenedor.id='proyecto_'+titulo_ppal;    
    })
}

function mostrarVentana(e){
    
    proyectoenHTML = e.target.parentElement

    listadeproyectos.forEach(proyecto =>{
        const {titulo_ppal,adecuaciones,imagenes} = proyecto;
        if(proyectoenHTML.id === ('proyecto_'+titulo_ppal)){
            console.log(proyectoenHTML)
        }
    })


}

