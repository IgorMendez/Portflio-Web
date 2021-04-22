// Variables
const body = document.querySelector('body')
const main = document.querySelector('main')
const menu = document.getElementById('menu')
const mainContainer = document.getElementById('main-container')
const divContainer = document.getElementById('div-container')
const getButton = document.getElementsByClassName('button')
const buttonArray = [
  'Sobremim', 
  'Habilidades', 
  'Formação', 
  'Experiências',
  'Contatos',
  'InformaçõesGerais'
]
const divArray = ['about-me', 'skills', 'education', 'experience', 'contact', 'info']

console.log()


function buttomMenuCreate(e) {
  for(let index = 0; index < e.length; index += 1) {
    const createbutton = document.createElement('button')
    menu.appendChild(createbutton)
    createbutton.innerText = buttonArray[index]
    createbutton.classList.add('button', 'btn-dark')
    createbutton.setAttribute('href', '#'+divArray[index]);
    createbutton.id = buttonArray[index]
  } 
}
let para = document.getElementById('para')

function showContainer(event) {
  if(event.type === 'click') {
    console.log(event.href)
    for(let index = 0; index < buttonArray.length; index += 1) {
    }
  } 
}

function teste() {
  for(let index = 0; index < buttonArray.length; index += 1) {
    document.getElementById(buttonArray[index]).addEventListener('click', showContainer)
  }
}



window.onload = function() {
  buttomMenuCreate(buttonArray)
  teste()
}