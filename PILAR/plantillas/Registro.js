const li =document.querySelectorAll('.li')
const bloque =document.querySelectorAll('.bloque')
// recorriendo todos los li
li.forEach(( cadaLi , i)=>{
    // asignando un click a li
    li[i].addEventListener( 'click' ,()=>{
        // recorriendo todos los li
        li. forEach(( cadaLi, i)=>{
            // quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo')
        })
        // en el li que hemos hecho click le añadimos clase activo
        li[i].classList.add('activo')
        // en el bloque con la misma posicion le añadimos la clase activo
        bloque[i].classList.add('activo')
    })

})    