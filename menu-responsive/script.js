const toggleMenuElement = document.getElementById('toggle-menu')
const mainMenuElement = document.getElementById('main-menu')

toggleMenuElement.addEventListener('click',()=>{
    mainMenuElement.classList.toggle('main-menu--show') //si tiene la clase la quitamos y si no la tiene la agrega
})