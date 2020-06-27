function flowers(){
  
    var mousePos = {};
  
   function getRandomInt(min, max) {
     return Math.round(Math.random() * (max - min + 1)) + min;
   }
    
    $(window).mousemove(function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
    
    var draw = setTimeout(function(event){
      // if(mousePos.x > 0 && mousePos.y > 0){
                
        var color = "background: linear-gradient(-45deg, + rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+"), rgba(0, 0, 255, 0)); filter: drop-shadow(0 0 6px + rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+"));";
        
        var colorb = "background: linear-gradient(-45deg, rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+"), rgba(0, 0, 255, 0)); filter: drop-shadow(0 0 6px rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+"));"

        var left = "left: " + event.offsetX + "px;";
        
        var top = "top: " + event.offsetY + "px;"; 
  
        var style = left+top+colorb;

        $("<div class='shooting_star' style='" + style + "'></div>").appendTo('#night'); 
      
    }, 100);

    draw.setTimeout()

    // // function stopflowers () {
    //   clearTimeout(draw)
    // }

    // $(window).dblclick(stopflowers)
  };

  window.onclick=(flowers)
  
  

