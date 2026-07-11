
function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

var colors = [
"#d6641b",
"#516735",
"#c4776e",
"#781f1f",
"#6c0d6d",
"#007dc6",
"#ffc220",
"#004c91",
"#990000",
"#5a2c35",
"#0c8b87"]

    var interval = 200;
    var width = 200;
    var height = 120;

    var blinkingWord = document.createElement('span');
    blinkingWord.setAttribute("id", "manywords");

    var wordPlacementInterval = setInterval(function() {
    var randomWord = choice(words).slice(0,1);
    blinkingWord.innerHTML = randomWord;
    blinkingWord.style.top = Math.floor((Math.random() * height) + 1) + 'px';
    blinkingWord.style.left = Math.floor((Math.random() * width) + 1) + 'px';
    blinkingWord.style.color = choice(colors);
    }, interval);

    var freq1 = "Rare";
	var freq2 = "Sometimes";
	var freq3 = "Frequently";
	var freq4 = "Very Often";


    $(document).ready(function(){

        $('#line1').delay(2000).show(0);
        $('#line2').delay(4000).show(0);
        $('#line3').delay(6000).show(0);
        $('#line4').hide();
        $('#frequencybuttons').hide();
        $('#shuffleagain').hide();
        $('#answers').hide();


		$('#button1').on('click', function(){
		
		$('#wordplaceholder').append(blinkingWord);
		$('#selectedword').text(" ");
		$('#line4').hide();
		$('#frequencybuttons').hide();
		$('#outcomemessage').text(" ");
		$('#conclusion').text(" ");
        $('#shuffleagain').hide();
        $('#answers').hide();
   
      		});

		$('#button2').on('click', function(){
		
		$('#wordplaceholder').text(" ");
		var userWord = choice(words);
		var showWord = userWord.slice(0,1);
		var showFrequency = userWord.slice(1,2);
		var showFrequencyBin = userWord.slice(2,3);
		$('#selectedword').text(showWord);
		$('#selectedword').css('color', choice(colors));
		$('#selectedword').css('top', Math.floor((Math.random() * height) + 1) + 'px');
        $('#selectedword').css('left', Math.floor((Math.random() * width) + 1) + 'px');
        $('#line4').show();
        $('#replacetext').text(showWord);
        $('#replacetext').css('font-size','2vw');
        $('#replacetext').css('text-decoration','underline');
        $('#frequencybuttons').show();
        $('#button3').text(freq1);
        $('#button4').text(freq2);
        $('#button5').text(freq3);
        $('#button6').text(freq4);
        $('#shuffleagain').hide();
        $('#answers').hide();

        $('#button3').on('click', function(){
		
        if (freq1 == showFrequencyBin) {
        $('#outcomemessage').text("THAT IS RIGHT!");	
        } else {
        $('#outcomemessage').text("Not exactly.");	
        }

        $('#conclusion').text("I say " + showWord + " " + showFrequency + " times in a million words! So that makes it " + showFrequencyBin + ".");
        $('#shuffleagain').show();
        $('#answers').show();

      		});

         $('#button4').on('click', function(){
		
        if (freq2 == showFrequencyBin) {
        $('#outcomemessage').text("THAT IS RIGHT!");	
        } else {
        $('#outcomemessage').text("Not exactly.");	
        }

        $('#conclusion').text("I say " + showWord + " " + showFrequency + " times in a million words! So that makes it " + showFrequencyBin + ".");
        $('#shuffleagain').show();
        $('#answers').show();

      		});

        $('#button5').on('click', function(){
		
        if (freq3 == showFrequencyBin) {
        $('#outcomemessage').text("THAT IS RIGHT!");	
        } else {
        $('#outcomemessage').text("Not exactly.");	
        }

        $('#conclusion').text("I say " + showWord + " " + showFrequency + " times in a million words! So that makes it " + showFrequencyBin + ".");
        $('#shuffleagain').show();
        $('#answers').show();

      		});

        $('#button6').on('click', function(){
		
        if (freq4 == showFrequencyBin) {
        $('#outcomemessage').text("THAT IS RIGHT!");	
        } else {
        $('#outcomemessage').text("Not exactly.");	
        }

        $('#conclusion').text("I say " + showWord + " " + showFrequency + " times in a million words! So that makes it " + showFrequencyBin + ".");
        $('#shuffleagain').show();
        $('#answers').show();

      		});



      		});

		    });

