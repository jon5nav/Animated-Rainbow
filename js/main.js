$(document).ready(function(){ 
    
    function animateRainbow () {
    if ($('#1').hasClass('red')){ 
    $('#1').removeClass('red').addClass('orange');    
    $('#2').removeClass('orange').addClass('yellow');
    $('#3').removeClass('yellow').addClass('green');
    $('#4').removeClass('green').addClass('lightblue');
    $('#5').removeClass('lightblue').addClass('navy');
    $('#6').removeClass('navy').addClass('purple');
    $('#7').removeClass('purple').addClass('red');
    } 
    else if ($('#1').hasClass('orange')){ 
    $('#7').removeClass('red').addClass('orange');    
    $('#1').removeClass('orange').addClass('yellow');    
    $('#2').removeClass('yellow').addClass('green');
    $('#3').removeClass('green').addClass('lightblue');
    $('#4').removeClass('lightblue').addClass('navy');
    $('#5').removeClass('navy').addClass('purple');
    $('#6').removeClass('purple').addClass('red');
    
    } 
     else if ($('#1').hasClass('yellow')){ 
    $('#6').removeClass('red').addClass('orange');    
    $('#7').removeClass('orange').addClass('yellow');    
    $('#1').removeClass('yellow').addClass('green');
    $('#2').removeClass('green').addClass('lightblue');
    $('#3').removeClass('lightblue').addClass('navy');
    $('#4').removeClass('navy').addClass('purple');
    $('#5').removeClass('purple').addClass('red');
    } 
     else if ($('#1').hasClass('green')){ 
    $('#5').removeClass('red').addClass('orange');    
    $('#6').removeClass('orange').addClass('yellow');    
    $('#7').removeClass('yellow').addClass('green');
    $('#1').removeClass('green').addClass('lightblue');
    $('#2').removeClass('lightblue').addClass('navy');
    $('#3').removeClass('navy').addClass('purple');
    $('#4').removeClass('purple').addClass('red');
    } 
     else if ($('#1').hasClass('lightblue')){ 
    $('#4').removeClass('red').addClass('orange');    
    $('#5').removeClass('orange').addClass('yellow');    
    $('#6').removeClass('yellow').addClass('green');
    $('#7').removeClass('green').addClass('lightblue');
    $('#1').removeClass('lightblue').addClass('navy');
    $('#2').removeClass('navy').addClass('purple');
    $('#3').removeClass('purple').addClass('red');
    } 
     else if ($('#1').hasClass('navy')){ 
    $('#3').removeClass('red').addClass('orange');    
    $('#4').removeClass('orange').addClass('yellow');    
    $('#5').removeClass('yellow').addClass('green');
    $('#6').removeClass('green').addClass('lightblue');
    $('#7').removeClass('lightblue').addClass('navy');
    $('#1').removeClass('navy').addClass('purple');
    $('#2').removeClass('purple').addClass('red');
    } 
     else if ($('#1').hasClass('purple')){ 
     $('#2').removeClass('red').addClass('orange');    
    $('#3').removeClass('orange').addClass('yellow');    
    $('#4').removeClass('yellow').addClass('green');
    $('#5').removeClass('green').addClass('lightblue');
    $('#6').removeClass('lightblue').addClass('navy');
    $('#7').removeClass('navy').addClass('purple');
    $('#1').removeClass('purple').addClass('red');
    } 
    
    

}

setInterval( animateRainbow, 200 );
    
    
    
    
    
var requestAnimationFrame =  
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };    
 
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function drawRainbowArc (x, y, radius, startAngle, endAngle, counterClockwise, color) {
      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.closePath();
      context.fillStyle = color;
      //context.lineWidth = 0;
      context.fill();
      //context.strokeStyle = '#550000';
      context.stroke();
      //context.shadowColor = '#999';
      //context.shadowBlur = 10;
      //context.shadowOffsetX = 3;
      //context.shadowOffsetY = 3;
    
    }


    function drawRainbow () {
 
//context.clearRect(0, 0, canvas.width, canvas.height);
     
drawRainbowArc(canvas.width/3, canvas.height/3, 100, 0, Math.PI, true, '#FF0000');
drawRainbowArc(canvas.width/3, canvas.height/3, 90, 0, Math.PI, true, '#ffa500');
drawRainbowArc(canvas.width/3, canvas.height/3, 80, 0, Math.PI, true, '#FFFF00');
drawRainbowArc(canvas.width/3, canvas.height/3, 70, 0, Math.PI, true, '#00CC00');
drawRainbowArc(canvas.width/3, canvas.height/3, 60, 0, Math.PI, true, '#00CCFF');
drawRainbowArc(canvas.width/3, canvas.height/3, 50, 0, Math.PI, true, '#003399');
drawRainbowArc(canvas.width/3, canvas.height/3, 40, 0, Math.PI, true, '#990099');
//white
drawRainbowArc(canvas.width/3, canvas.height/3, 30, 0, Math.PI, true, '#FFFFFF');
  
  setTimeout(function(){drawRainbowArc(canvas.width/3, canvas.height/3, 100, 0, Math.PI, true, '#ffa500');
drawRainbowArc(canvas.width/3, canvas.height/3, 90, 0, Math.PI, true, '#FFFF00');
drawRainbowArc(canvas.width/3, canvas.height/3, 80, 0, Math.PI, true, '#00CC00');
drawRainbowArc(canvas.width/3, canvas.height/3, 70, 0, Math.PI, true, '#00CCFF');
drawRainbowArc(canvas.width/3, canvas.height/3, 60, 0, Math.PI, true, '#003399');
drawRainbowArc(canvas.width/3, canvas.height/3, 50, 0, Math.PI, true, '#990099');
drawRainbowArc(canvas.width/3, canvas.height/3, 40, 0, Math.PI, true, '#FF0000');
//white
drawRainbowArc(canvas.width/3, canvas.height/3, 30, 0, Math.PI, true, '#FFFFFF');},300); 
        
   setTimeout(function(){
 drawRainbowArc(canvas.width/3, canvas.height/3, 100, 0, Math.PI, true, '#FFFF00');
drawRainbowArc(canvas.width/3, canvas.height/3, 90, 0, Math.PI, true, '#00CC00');
drawRainbowArc(canvas.width/3, canvas.height/3, 80, 0, Math.PI, true, '#00CCFF');
drawRainbowArc(canvas.width/3, canvas.height/3, 70, 0, Math.PI, true, '#003399');
drawRainbowArc(canvas.width/3, canvas.height/3, 60, 0, Math.PI, true, '#990099');
drawRainbowArc(canvas.width/3, canvas.height/3, 50, 0, Math.PI, true, '#FF0000');
drawRainbowArc(canvas.width/3, canvas.height/3, 40, 0, Math.PI, true, '#ffa500');
//white
drawRainbowArc(canvas.width/3, canvas.height/3, 30, 0, Math.PI, true, '#FFFFFF');},600);        
  
   setTimeout(function(){
 drawRainbowArc(canvas.width/3, canvas.height/3, 100, 0, Math.PI, true, '#00CC00');
drawRainbowArc(canvas.width/3, canvas.height/3, 90, 0, Math.PI, true, '#00CCFF');
drawRainbowArc(canvas.width/3, canvas.height/3, 80, 0, Math.PI, true, '#003399');
drawRainbowArc(canvas.width/3, canvas.height/3, 70, 0, Math.PI, true, '#990099');
drawRainbowArc(canvas.width/3, canvas.height/3, 60, 0, Math.PI, true, '#FF0000');
drawRainbowArc(canvas.width/3, canvas.height/3, 50, 0, Math.PI, true, '#ffa500');
drawRainbowArc(canvas.width/3, canvas.height/3, 40, 0, Math.PI, true, '#FFFF00');
//white
drawRainbowArc(canvas.width/3, canvas.height/3, 30, 0, Math.PI, true, '#FFFFFF');},900); 
        
    setTimeout(function(){
 drawRainbowArc(canvas.width/3, canvas.height/3, 100, 0, Math.PI, true, '#00CCFF');
drawRainbowArc(canvas.width/3, canvas.height/3, 90, 0, Math.PI, true, '#003399');
drawRainbowArc(canvas.width/3, canvas.height/3, 80, 0, Math.PI, true, '#990099');
drawRainbowArc(canvas.width/3, canvas.height/3, 70, 0, Math.PI, true, '#FF0000');
drawRainbowArc(canvas.width/3, canvas.height/3, 60, 0, Math.PI, true, '#ffa500');
drawRainbowArc(canvas.width/3, canvas.height/3, 50, 0, Math.PI, true, '#FFFF00');
drawRainbowArc(canvas.width/3, canvas.height/3, 40, 0, Math.PI, true, '#00CC00');
//white
drawRainbowArc(canvas.width/3, canvas.height/3, 30, 0, Math.PI, true, '#FFFFFF');},1200);

    setTimeout(function(){
 drawRainbowArc(canvas.width/3, canvas.height/3, 100, 0, Math.PI, true, '#003399');
drawRainbowArc(canvas.width/3, canvas.height/3, 90, 0, Math.PI, true, '#990099');
drawRainbowArc(canvas.width/3, canvas.height/3, 80, 0, Math.PI, true, '#FF0000');
drawRainbowArc(canvas.width/3, canvas.height/3, 70, 0, Math.PI, true, '#ffa500');
drawRainbowArc(canvas.width/3, canvas.height/3, 60, 0, Math.PI, true, '#FFFF00');
drawRainbowArc(canvas.width/3, canvas.height/3, 50, 0, Math.PI, true, '#00CC00');
drawRainbowArc(canvas.width/3, canvas.height/3, 40, 0, Math.PI, true, '#00CCFF');
//white
drawRainbowArc(canvas.width/3, canvas.height/3, 30, 0, Math.PI, true, '#FFFFFF');},1500);        

      setTimeout(function(){
 drawRainbowArc(canvas.width/3, canvas.height/3, 100, 0, Math.PI, true, '#990099');
drawRainbowArc(canvas.width/3, canvas.height/3, 90, 0, Math.PI, true, '#FF0000');
drawRainbowArc(canvas.width/3, canvas.height/3, 80, 0, Math.PI, true, '#ffa500');
drawRainbowArc(canvas.width/3, canvas.height/3, 70, 0, Math.PI, true, '#FFFF00');
drawRainbowArc(canvas.width/3, canvas.height/3, 60, 0, Math.PI, true, '#00CC00');
drawRainbowArc(canvas.width/3, canvas.height/3, 50, 0, Math.PI, true, '#00CCFF');
drawRainbowArc(canvas.width/3, canvas.height/3, 40, 0, Math.PI, true, '#003399');
//white
drawRainbowArc(canvas.width/3, canvas.height/3, 30, 0, Math.PI, true, '#FFFFFF');},1800);      
 
    }
 //drawRainbow();   
setInterval(drawRainbow, 2100 );

    
}); // end of ready
