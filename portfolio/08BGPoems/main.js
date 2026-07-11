
function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}


var titleColors = [
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

        var count = poemDetails.length;
        var footnote1 = "There are currently " + count + " poems to read from."
        var footnote2 = "Each is displayed by random selection."
        var opensource = "This is an open-source project. If you wish to contribute and submit a published poem, please send me an "
        var email = {permalink_url : "whatever.com", title : "email"};

    $(document).ready(function(){
		$('.button').on('click', function(){

			var poem = choice(poemDetails);    
            var color = choice(titleColors);
		
		$('h2').text(poem[0].toUpperCase());
		$('h2').css('color', color);
		$('#body').html(poem[1]);
		$('#author').text("Author: " + poem[2]);
		$('#translator').text("Translator: " + poem[3]);
		$('#footnote1').text(footnote1);
		$('#footnote2').text(footnote2);
		$('#opensource').text(opensource).css('border', '2px solid #708238');
		$("<a></a>", {href : "mailto:kiril_traykov@yahoo.com", html : email.title}).appendTo("#opensource");

		})

		});

