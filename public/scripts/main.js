import Modal from './modal.js'

const modal = Modal()

//atribui a constante a tag <h2> da classe .modal
const modalTitle = document.querySelector('.modal h2')

//atribui a constante a tag <a> da classe .modal
const modalDescription = document.querySelector('.modal p')

//atribui a constante a tag <button> da classe .modal
const modalButton = document.querySelector('.modal button')


//pegar todos os botoes que pertencem a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//percorre todos os botoes check
checkButtons.forEach(button => {
    //adiciona um listener de click a cada um dos botoes
    button.addEventListener('click', handleClick)
})

// atribui a constante todos as tags <a> dentro da classe .delete,
// que tambem estejam dentro da classe .actions
const deleteButton = document.querySelectorAll('.actions a.delete')

//percorre todos os botoes de delete da pagina
deleteButton.forEach(button => {
    //adiciona um listener de click a cada um dos botoes
    button.addEventListener('click', (event) => handleClick(event, false))
})

//funcao recebe um event e atribue o valor true a variavel check
function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
    
    /* CHAMA A FUNCAO open() DO modal.js
    que adiciona a classe "active" na modal */
    modal.open()
}