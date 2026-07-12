

	$(document).ready(function(){

		$('.resize').hide();
		$('h4').hide();
		$('.shoe').hide();


		$('#button1').on('click', function(){

	        $('#box1').remove();
	        $('.resize').show();
	        $('h4').show();

		        $('#button2').on('click', function(){

 					$('h4').remove();
		        	$('.shoe').show();
		        	$('.shoe').css("margin-right","5%");
   
      		      });
   
      		});

		});




