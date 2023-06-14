const form = document.getElementById('form-valida');
const campoA = document.querySelector('#campo-a');
const campoB = document.querySelector('input#campo-b');
let formEValido = true;

function validaCampo(diferenca) {
    const seMaior = parseInt(diferenca.value) > parseInt(campoA.value);
    return seMaior;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Parabéns! O <b>campo B</b> com valor de <b>${parseInt(campoB.value)}</b> é maior`;

    formEValido = validaCampo(campoB);
    console.log(formEValido);
    
    if (formEValido) {
        const containerMessageSucesso = document.querySelector('.success-message');
        containerMessageSucesso.innerHTML = mensagemSucesso;
        containerMessageSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
})

campoB.addEventListener('keyup', function(e) {
    formEValido = validaCampo(e.target); // ao finalizar os codigos tentar por aqui campoB e ver oq acontece. (Também da certo, riririri)
    const containerErrorMessage = document.querySelector('.error-message');
    console.log(e.target);
    
    if (!formEValido) {
        containerErrorMessage.style.display = 'block'
        campoA.classList.add('error')
    } else {
        containerErrorMessage.style.display = 'none'
        campoA.classList.remove('error')
    }
})