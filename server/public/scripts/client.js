console.log('JS');

$(document).ready(onReady);

function onReady(){
    console.log('jQ');
    // $('#equals').on('click', fResult);
    $('#equals').on('click', fEquals);
}

// function fResult(req, res){
//     $.ajax({
//         type: 'post',
//         url: '/base',
//         data: 'test send'
//     }).done(function(req){
//         $('#result').text(req);
//     }).fail(function(res){
//         console.log('It\'s a dud, dude.')
//     })
// }

function fEquals(){
    $.ajax({
        type: 'get',
        url: '/base'
    }).done(function(req){
        $('#result').text(req);
    }).fail(function(res){
        console.log('It\'s a dud, dude.')
    })
}