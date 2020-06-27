function bouncingballs(){
  
    var mousePos = {};
  
   function getRandomInt(min, max) {
     return Math.round(Math.random() * (max - min + 1)) + min;
   }
    
    $(window).mousemove(function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
    
    // $(window).mouseleave(function(e) {
    //   mousePos.x = +1;
    //   mousePos.y = +1;
    // });
    
    var draw = setInterval(function(){
      if(mousePos.x > 0 && mousePos.y > 0){
        
        var range = 20;
        
        var color = "background: rgba("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+",0.3);";
        
        var sizeInt = getRandomInt(-200, 200);
        
        var left = "left: " + mousePos.x + "px;";
        
        var top = "top: " + mousePos.y + "px;"; 
  
        var style = left+top;
        var istyle = color

        $("<div class='ball' style='" + style + "'><i style='" + istyle + "'></i></div>").appendTo('#wrap'); 
      }
    }, 100);

    function stopflowers () {
      clearInterval(draw)
    }

    $(window).dblclick(stopflowers)
  };

  window.onclick = bouncingballs
  
  

