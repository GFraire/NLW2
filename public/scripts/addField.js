// Procurar o botão //Quando clicar no botão
document.querySelector('#add-time').addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    // Para cada campo, limpar
    fields.forEach((field) => field.value = '')
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    