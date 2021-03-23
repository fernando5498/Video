const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

// se seleciona las clases 

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})

// se añade un evento que al hacer click genera la siguiente funcion :
// esta hace que menuToggle y showcase se le añadan una clase 
// se pone el elemento toggle(javascript) que mantiene o alterna entre presionado
// o al aire....se debe especificar que clase se le añadira