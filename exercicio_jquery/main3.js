$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefaNova = $('#nova-tarefa').val();
        console.log(tarefaNova);
        const novoItem = $('<li></li>');
        $(`<span>${tarefaNova}</span>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('')

        $(novoItem).click(function() {
            console.log('o elemento foi clicado');
            $(novoItem).toggleClass('del')
        });

    })
})