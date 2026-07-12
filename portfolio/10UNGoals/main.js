    var goalUN = "UN"
    var goal0 = "Goals"
    var goal1 = "No Hunger"
	var goal2 = "No Poverty"
	var goal3 = "Good Health and Well-Being"
	var goal4 = "Clean Water and Sanitation"
	var goal5 = "Gender Equality"
	var goal6 = "Quality Education"
	var goal7 = "Reduced Inequalities"
	var goal8 = "Peace, Justice, and Strong Institutions"
	var goal9 = "Affordable and Clean Energy"
	var goal10 = "Decent Work and Economic Growth"
	var goal11 = "Responsible Consumption and Production"
	var goal12 = "Industry, Innovation, and Infrastructure"
	var goal13 = "Life on Land"
	var goal14 = "Climate Action"
	var goal15 = "Life Below Water"
	var goal16 = "Sustainable Cities and Communities"
	var goal17 = "Partnerships"
	var goalTree = "The Tree of Sustainable Development!"



	$(document).ready(function(){

		$('h3').hide();
		$('.pic1').hide();
        $('.pic2').hide();
        $('.initial').hide();
        $('h4').hide();
        $('li').hide();
        setTimeout(function(){ $('h3').show();}, 1500);
        setTimeout(function(){ $('.pic1').show();}, 1500);
        setTimeout(function(){ $('.pic2').show();}, 4000); 
		setTimeout(function(){ $('.initial').show();}, 8000);
		setTimeout(function(){ $('h4').show();}, 12000);  

		$('#button1').on('click', function(){
			$('.pic2').remove();
			$('.initial').remove();
			$('h4').remove();
		    $('#button1').remove();
   			$('li').show();
		    $('#placeholderUN').delay(2000).queue(function (next) { $(this).append(goalUN); next();}).css({"color":"#FF8000","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder0').delay(3000).queue(function (next) { $(this).append(goal0); next();}).css({"color":"#FF8000","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
			$('#placeholder1').delay(4000).queue(function (next) { $(this).append(goal1); next();}).css({"color":"#CC0066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
			$('#placeholder2').delay(5000).queue(function (next) { $(this).append(goal2); next();}).css({"color":"#CC0066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
			$('#placeholder3').delay(6000).queue(function (next) { $(this).append(goal3); next();}).css({"color":"#CC0066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder4').delay(7000).queue(function (next) { $(this).append(goal4); next();}).css({"color":"#CC0066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder5').delay(8000).queue(function (next) { $(this).append(goal5); next();}).css({"color":"#660000","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder6').delay(9000).queue(function (next) { $(this).append(goal6); next();}).css({"color":"#660000","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder7').delay(10000).queue(function (next) { $(this).append(goal7); next();}).css({"color":"#660000","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder8').delay(11000).queue(function (next) { $(this).append(goal8); next();}).css({"color":"#660000","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder9').delay(12000).queue(function (next) { $(this).append(goal9); next();}).css({"color":"#000066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder10').delay(13000).queue(function (next) { $(this).append(goal10); next();}).css({"color":"#000066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder11').delay(14000).queue(function (next) { $(this).append(goal11); next();}).css({"color":"#000066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder12').delay(15000).queue(function (next) { $(this).append(goal12); next();}).css({"color":"#000066","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder13').delay(16000).queue(function (next) { $(this).append(goal13); next();}).css({"color":"#006600","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder14').delay(17000).queue(function (next) { $(this).append(goal14); next();}).css({"color":"#006600","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder15').delay(18000).queue(function (next) { $(this).append(goal15); next();}).css({"color":"#006600","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder16').delay(19000).queue(function (next) { $(this).append(goal16); next();}).css({"color":"#006600","font-size": "1.5vw","font-family": "'Architects Daughter', cursive"});
		    $('#placeholder17').delay(20000).queue(function (next) { $(this).append(goal17); next();}).css({"color":"#494529","font-size": "5vw","font-family": "'Hanalei Fill', cursive"});
      		$('#placeholderTree').delay(22000).queue(function (next) { $(this).append(goalTree); next();}).css({"color":"#00B040","font-size": "3vw","font-family": "'Architects Daughter',cursive"});

		});

		});




