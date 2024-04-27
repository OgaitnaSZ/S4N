//scroll
logo = document.getElementById('logo');
window.addEventListener('scroll', function(event){
    let scroll = this.scrollY;
    scroll > 0?cambiarImagen('img/S4N-logo.png'):cambiarImagen('img/S4N-logo2.png');
});
logo.addEventListener('mouseover', ()=>{cambiarImagen('img/S4N-logo.png')});
logo.addEventListener('mouseout', ()=>{cambiarImagen('img/S4N-logo2.png')});

function cambiarImagen(ruta){logo.setAttribute('src', ruta);}
