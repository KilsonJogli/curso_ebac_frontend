$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefaNova = $('#nova-tarefa').val();
        console.log(tarefaNova);
        const novoItem = $(`<li>${tarefaNova}</li>`);
        $(novoItem).appendTo('ul');
            $('#nova-tarefa').val('');       


        $(novoItem).click(function() {
            console.log("elemento foi clicado");
                $(novoItem).attr("style", "text-decoration: line-through");

    })

})

})