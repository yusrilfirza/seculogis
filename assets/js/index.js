$(document).ready(function(){
    $('#popup').hide();
    $('#popupreg').hide();
    $('#masuk').click(function(){
        $('#popup').fadeIn();
    })
    $('#daftar').click(function(){
        $('#popupreg').fadeIn();
    })
    
    $('#closed').click(function(){
        $('#popupreg').fadeOut();
    })
    $('#close').click(function(){
        $('#popup').fadeOut();
    })
    
})
$(document).mouseup(function(e){
    var cont = $('#popup');
    var conto = $('#popupreg');
    if(!cont.is(e.target) && cont.has(e.target).length === 0){
        cont.fadeOut();
    }
    if(!conto.is(e.target) && conto.has(e.target).length === 0){
        conto.fadeOut();
    }
})

$(document).on('keydown', function(e){
    if(e.keyCode == 27){
        $('#popup').fadeOut();
        $('#popupreg').fadeOut();
    }
})