// Variables
const body = document.querySelector('body')
const mainContainer = document.querySelector('main')
const menu = document.getElementById('menu')
const buttonArray = [
  'Currículo',
  'Sobre mim', 
  'Habilidades', 
  'Formação', 
  'Experiência',
  'Contatos',
'Informações Gerais'
]

console.log(menu)
// mainContainer.children.namedItem('header-section')

function buttomMenuCreate(e) {
  for(let index = 0; index < e.length; index += 1) {
    const createbutton = document.createElement('button')
    menu.appendChild(createbutton)
    createbutton.innerText = buttonArray[index]
    createbutton.classList.add('button')
  }
}

window.onload = function() {
  buttomMenuCreate(buttonArray)
}