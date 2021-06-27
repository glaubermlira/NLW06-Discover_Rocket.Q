import Modal from './modal.js';

const modal = Modal()

//Pegar todos os botões que existem com a class ckeck';
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  //Adicionar escuta
  button.addEventListener('click', event => {
    //Abrir Modal
    event.preventDefault() 
  })
})
//Pegar quando o marcar como lido for clicado;


