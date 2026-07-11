

$(document).ready(function(){

        $('#line1').delay(2000).show(0);
        $('#line2').delay(4000).show(0);
        $('#line3').delay(6000).show(0);
        $('#line4').delay(8000).show(0);
        $('#beginButton').delay(10000).show(0);
        $('#typeAnswer1').hide();
        $('#submit1').hide();
        $('#typeAnswer2').hide();
        $('#submit2').hide();
        $('#typeAnswer3').hide();
        $('#submit3').hide();
        $('#box').hide();

        $('#beginButton').on('click', function(){
        $('#beginButton').hide();
        $('#question').text("1. What car do you drive? (Type None if not applicable)");
        $('#typeAnswer1').show();
        $('#submit1').show();

        $('#submit1').on('click', function(){
        var answer1 = $('input[name=Words1]').val();
        console.log(answer1);
        var answer11 = answer1.toLowerCase();
        var answer111 = answer11.slice(1,2);
if (answer111 == "a"){
    answer111 = 0;
} else 
if (answer111 == "b"){
    answer111 = 1;
} else
if (answer111 == "c"){
    answer111 = 2;
} else
if (answer111 == "d"){
    answer111 = 3;
} else
if (answer111 == "e"){
    answer111 = 4;
} else
if (answer111 == "f"){
    answer111 = 5;
} else
if (answer111 == "g"){
    answer111 = 6;
} else
if (answer111 == "h"){
    answer111 = 7;
} else
if (answer111 == "i"){
    answer111 = 8;
} else
if (answer111 == "j"){
    answer111 = 9;
} else
if (answer111 == "k"){
    answer111 = 10;
} else
if (answer111 == "l"){
    answer111 = 11;
} else
if (answer111 == "m"){
    answer111 = 12;
} else
if (answer111 == "n"){
    answer111 = 13;
} else
if (answer111 == "o"){
    answer111 = 14;
} else
if (answer111 == "p"){
    answer111 = 15;
} else
if (answer111 == "q"){
    answer111 = 16;
} else
if (answer111 == "r"){
    answer111 = 17;
} else
if (answer111 == "s"){
    answer111 = 18;
} else
if (answer111 == "t"){
    answer111 = 19;
} else
if (answer111 == "u"){
    answer111 = 20;
} else
if (answer111 == "v"){
    answer111 = 21;
} else
if (answer111 == "w"){
    answer111 = 22;
} else
if (answer111 == "x"){
    answer111 = 23;
} else
if (answer111 == "y"){
    answer111 = 24;
} else
if (answer111 == "z"){
    answer111 = 25;
}
        $('#typeAnswer1').hide();
        $('#submit1').hide();
        $('#question').text("2. Which city was your first kiss in?");
        $('#typeAnswer2').show();
        $('#submit2').show();

        $('#submit2').on('click', function(){
        var answer2 = $('input[name=Words2]').val();
        console.log(answer2);
        var answer22 = answer2.slice(0,1).toLowerCase();
if (answer22 == "a"){
    answer22 = 0;
} else 
if (answer22 == "b"){
    answer22 = 1;
} else
if (answer22 == "c"){
    answer22 = 2;
} else
if (answer22 == "d"){
    answer22 = 3;
} else
if (answer22 == "e"){
    answer22 = 4;
} else
if (answer22 == "f"){
    answer22 = 5;
} else
if (answer22 == "g"){
    answer22 = 6;
} else
if (answer22 == "h"){
    answer22 = 7;
} else
if (answer22 == "i"){
    answer22 = 8;
} else
if (answer22 == "j"){
    answer22 = 9;
} else
if (answer22 == "k"){
    answer22 = 10;
} else
if (answer22 == "l"){
    answer22 = 11;
} else
if (answer22 == "m"){
    answer22 = 12;
} else
if (answer22 == "n"){
    answer22 = 13;
} else
if (answer22 == "o"){
    answer22 = 14;
} else
if (answer22 == "p"){
    answer22 = 15;
} else
if (answer22 == "q"){
    answer22 = 16;
} else
if (answer22 == "r"){
    answer22 = 17;
} else
if (answer22 == "s"){
    answer22 = 18;
} else
if (answer22 == "t"){
    answer22 = 19;
} else
if (answer22 == "u"){
    answer22 = 20;
} else
if (answer22 == "v"){
    answer22 = 21;
} else
if (answer22 == "w"){
    answer22 = 22;
} else
if (answer22 == "x"){
    answer22 = 23;
} else
if (answer22 == "y"){
    answer22 = 24;
} else
if (answer22 == "z"){
    answer22 = 25;
}
        $('#typeAnswer2').hide();
        $('#submit2').hide();
        var search = answer111 + answer22;
        console.log(search);
        $('#question').text("3. What was the best year in your life?");
        var answer3 = $('input[name=Words3]').val();
        $('#typeAnswer3').show();
        $('#submit3').show();


        $('#submit3').on('click', function(){
        var answer3 = $('input[name=Words3]').val();
        $('#typeAnswer3').hide();
        $('#submit3').hide();
        $('#question').text("");
        $('#line4').hide();
        $('#box').show();
        if (answer11 !== "none") {
        $('#warning').html("First, a reminder:" +
                           "</br>" + "</br>" + "<b>" + "DO NOT" + "</b>" + "</br>" + "</br>" +
                           "drink AND drive your " + "<b>" + answer1  + "</b>" + "</br>" + "OR" + "</br>" + 
                           "kiss AND drive in " + "<b>" + answer2 + "</b>" + "!");
        } else {
        $('#warning').html("First, a reminder:" +
                           "</br>" + "</br>" + "<b>" + "DO NOT" + "</b>" + "</br>" + "</br>" +
                           "drink AND drive" + "<b>" + " when you FINALLY get a car" + "!");
        }


        $('#takeMeToResults').on('click', function(){
        $('#line1').hide();
        $('#line2').hide();
        $('#line3').hide();
        $('#line4').hide();
        $('#warning').text("");
        $('#takeMeToResults').text("");
        $('#box').hide();
        $('#beerMatchIs').html("<b>" + "Your Beer Match is:" + "</b>");
        var chosenBeer = allbeers[search];
        var chosenBeerName = chosenBeer.data.name;
        var chosenBeerDescription = chosenBeer.data.description;
        var chosenBeerABV = chosenBeer.data.abv + "%";
        var chosenBeerOrigin = chosenBeer.data.style.category.name;
        var chosenBeerFamily = chosenBeer.data.style.name;
        $('#beerName').text(chosenBeerName);
        $('#beerDescription').text(chosenBeerDescription);
        $('#beerABV').text("ABV percent: " + chosenBeerABV);
        $('#beerOrigin').text("Geo Origin: " + chosenBeerOrigin);
        $('#beerFamily').text("Family: " + chosenBeerFamily);
        window.setTimeout(function () {
        $("#cheers").html("Cheers in the spirit of " + answer3 + "!");
        }, 3000);
       

        });

        });

        });

        });

        });


});