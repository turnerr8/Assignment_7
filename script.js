$(document).ready(function () {

    //right answer is chosen
    $('.right').click(function(){
        $(this).css("background-color", "green");
        $('#info-1').show();
        $('.wrong').css("background-color", "");
        $('.wrong').css("color", "");

    });

    //wrong answer is chosen
    $('.wrong').click(function(){
        $(this).css("background-color", "red");
    })

    $('.quiz-option').click(function(){
        $(this).css("color", "white");
    })
});