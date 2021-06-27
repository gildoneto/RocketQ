export default function Modal(){
    // guarda todos os elementos dentro da classe '.modal-wrapper'
    const modalWrapper = document.querySelector('.modal-wrapper')
    // guarda todos os elementos dentro que tenham ao mesmo tempo
    // a classe '.button' e a '.cancel'
    const cancelButton = document.querySelector('.button.cancel')

    //Adiciona um Event Listener de click, que ao ser acionada executa a funcao close
    cancelButton.addEventListener('click', close)

    function open(){
        //funcionalidade de atribuiur a classe active para a modal
        modalWrapper.classList.add('active')
    }
    function close(){
        //funcionalidade de remover a classe active para a modal
        modalWrapper.classList.remove('active')
    }

    return{
        open,
        close
    }
}