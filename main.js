$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();

        const campoInput = $('#addTask').val();
        const tarefa = '<li><span>' + campoInput + 
        '</span><button class="remove-task">Excluir</button></li>';

        $('#ul-task').append(tarefa);
        $('#addTask').val('');
    });

    $('#ul-task').on('click', 'li', function(e){   
        if (!$(e.taget).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });

    $('#ul-task').on('click', '.remove-task', function(e){
        e.stopPropagation();
        $(this).closest('li').remove();
    
    });

    $('#clear-task').on('click', function(){
        $('#ul-task').empty();
    });

});