const form = document.getElementById('form-valida');    
const campoA = document.querySelector('#campo-a');
const campoB = document.querySelector('input#campo-b');
let formEValido = true

function validaCampo(diferenca) {
    const seMaior = parseInt(diferenca) > parseInt(campoA.value);
    return seMaior;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `Parabéns! o <b>campo B</b> com valor de <b>${parseInt(campoB.value)} </b> é maior`
    

formEValido = validaCampo(campoB.value);
console.log(formEValido);
if (formEValido) {
    const containerMessageSuccess = document.querySelector('.success-message')
    containerMessageSuccess.innerHTML = mensagemSucesso
    containerMessageSuccess.style.display = 'block'

    campoA.value = '';
    campoB.value = '';
} else {

}

})

campoB.addEventListener('keyup', function(e) {
    formEValido = validaCampo(e.target.value);
    const containerErrorMessage = document.querySelector('.error-message')

    if(!formEValido) {
        containerErrorMessage.style.display = 'block'
        campoA.classList.add('error')

    } else {
        containerErrorMessage.style.display = 'none'
        campoA.classList.remove('error')
    }
})

