$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep'). mask('00000-000', {
        placeholder: '00000-000'
    });
    $('#telefone').mask('(00)00000-0000')
})
$('form').validate({
    rules: {
        nome: {
            required:true 
        },
        email: {
            required:true,
            email:true
        },
        telefone: {
            required:true
        },
        cpf: {
            required:true
        },
        endereco: {
            required:true
        },
        cep: {
            required:true,
        }
    },
    messages: {
        nome: 'Por favor, digite seu nome.'
    },
    submitHandler: function(form) {
        console.log(form);
    },
    invalidHandler: function(eventos, validador) {
        const campoIncorreto = validador.numberOfInvalids();
        console.log(campoIncorreto);
        if(campoIncorreto) {
            alert(`Existem ${campoIncorreto} campos incorretos`)
        }
    }
})