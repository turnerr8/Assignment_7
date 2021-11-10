$(document).ready(function () {

    //right answer is chosen
    $('.right').click(function(){
        $(this).css("background-color", "green");
        $('#info-1').show();
        $('#material-quiz').show();
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

    //QUIZ FOR MATERIAL
    $('.right-1').click(function(){
        $(this).css("background-color", "green");
        $('#material').show();
        $('#shape-quiz').show();
        $('.wrong-1').css("background-color", "");
        $('.wrong-1').css("color", "");

    });

    //wrong answer is chosen
    $('.wrong-1').click(function(){
        $(this).css("background-color", "red");
    })

    $('.quiz-option-1').click(function(){
        $(this).css("color", "white");
    })

    //QUIZ FOR SHAPE
     $('.right-2').click(function(){
        $(this).css("background-color", "green");
        $('#shape').show();
        $('.wrong-2').css("background-color", "");
        $('.wrong-2').css("color", "");

    });

    //wrong answer is chosen
    $('.wrong-2').click(function(){
        $(this).css("background-color", "red");
    })

    $('.quiz-option-2').click(function(){
        $(this).css("color", "white");
    })
    
});