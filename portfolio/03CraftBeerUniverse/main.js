
   $(document).ready(function(){

        $('#skipIntro').on('click', function(){

        $('#statement1').remove();
        $('#li1').remove();
        $('#li2').remove();
        $('#li3').remove(); 
        $('#li4').remove();
        $('#statement2').remove();
        $('#dot1').remove();
        $('#dot2').remove();
        $('#dot3').remove(); 
        $('#dot4').remove();
        $('#comment1').remove();
        $('#comment2').remove(); 
        $('#statement3').remove();
        $('#button0').remove();
        $('#skipIntro').remove();
        $('#box1').remove();
        $('#box2').remove();
        $('#box3').remove();
        $('#box4').remove();
        $('#footnote1').show();
        $('h5').show();
        $('#button1').show();
        $('#button2').show();
        $('#button3').show();
        $('#button4').show();
        $('#button5').show();
        $('#button6').show();
        $('#button7').show();
        $('#button8').show();
        $('#button9').show();
        $('#button10').show();
        $('#button11').show();
        $('#button12').show();
        $('#d3Holder').show();
        $('#listHolder').show();
        $('#graphHolder').show();
                 

        });

        $('#footnote1').hide();
        $('#statement1').hide();
        $('#li1').hide();
        $('#li2').hide();
        $('#li3').hide();
        $('#li4').hide();
        $('#statement2').hide();
        $('#dot1').hide();
        $('#dot2').hide();
        $('#dot3').hide();
        $('#dot4').hide();
        $('#comment1').hide();
        $('#comment2').hide();
        $('#statement3').hide();
        $('#button0').hide();
        $("h5").hide();
        $('#button1').hide();
        $('#button2').hide();
        $('#button3').hide();
        $('#button4').hide();
        $('#button5').hide();
        $('#button6').hide();
        $('#button7').hide();
        $('#button8').hide();
        $('#button9').hide();
        $('#button10').hide();
        $('#button11').hide();
        $('#button12').hide();
        $('#d3Holder').hide();
        $('#listHolder').hide();
        $('#graphHolder').hide();
        setTimeout(function(){ $('#statement1').show();}, 1000);
        setTimeout(function(){ $('#li1').show();}, 2000);
        setTimeout(function(){ $('#li2').show();}, 4000);
        setTimeout(function(){ $('#li3').show();}, 6000); 
        setTimeout(function(){ $('#li4').show();}, 8000);
        setTimeout(function(){ $('#statement2').show();}, 10000);
        setTimeout(function(){ $('#dot1').show();}, 11000);
        setTimeout(function(){ $('#dot2').show();}, 12000);
        setTimeout(function(){ $('#dot3').show();}, 13000); 
        setTimeout(function(){ $('#dot4').show();}, 14000);
        setTimeout(function(){ $('#comment1').show();}, 16000);
        setTimeout(function(){ $('#comment2').show();}, 20000); 
        setTimeout(function(){ $('#statement3').show();}, 24000);
        setTimeout(function(){ $('#button0').show();}, 25000);


         $('#button0').on('click', function(){

        $('#statement1').remove();
        $('#li1').remove();
        $('#li2').remove();
        $('#li3').remove(); 
        $('#li4').remove();
        $('#statement2').remove();
        $('#dot1').remove();
        $('#dot2').remove();
        $('#dot3').remove(); 
        $('#dot4').remove();
        $('#comment1').remove();
        $('#comment2').remove(); 
        $('#statement3').remove();
        $('#button0').remove();
        $('#skipIntro').remove();
        $('#box1').remove();
        $('#box2').remove();
        $('#box3').remove();
        $('#box4').remove();
        $('#footnote1').show();
        $('h5').show();
        $('#button1').show();
        $('#button2').show();
        $('#button3').show();
        $('#button4').show();
        $('#button5').show();
        $('#button6').show();
        $('#button7').show();
        $('#button8').show();
        $('#button9').show();
        $('#button10').show();
        $('#button11').show();
        $('#button12').show();
        $('#d3Holder').show();
        $('#listHolder').show();
        $('#graphHolder').show();
                 

        });

         $('#button1').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("North American Origin Ales");
         });

         $('#button2').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("British Origin Ales");
         });

         $('#button3').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("Belgian And French Origin Ales");
         });

         $('#button4').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("German Origin Ales");
         });

         $('#button5').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("Irish Origin Ales");
         });

         $('#button6').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("International Ale Styles");
         });

         $('#button7').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("European-germanic Lager");
         });

         $('#button8').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("North American Lager");
         });

         $('#button9').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("International Styles");
         });

         $('#button10').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("Hybrid/mixed Beer");
         });

         $('#button11').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("Mead Cider & Perry");
         });

         $('#button12').on('click', function(){
         $('#listHolder').empty();
         $('#graphHolder').empty();
         drawGraph("Malternative Beverages");
         });

    });

