

var canvas  = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle   = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);


        


var canvasTwo = document.getElementById("myCanvasTwo"); 
var contextTwo = canvasTwo.getContext("2d"); 
contextTwo.strokeStyle = "green";
var img = new Image();
img.src = "duaLipa.jpg";
img.onload = function() {
    var pattern = contextTwo.createPattern(img, "repeat"); 
    contextTwo.fillStyle = pattern;                        
    contextTwo.fillRect(50, 50, 500, 5000);                  
    contextTwo.strokeRect(50, 50, 500, 5000);             
};


        
    var canvasThree = document.getElementById("demo3");
    var contextThree = canvasThree.getContext("2d");
    contextThree.strokeStyle = "red";
    var gradient = contextThree.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    contextThree.fillStyle = gradient; 
    contextThree.fillRect(10, 10, 100, 100); 
    contextThree.strokeRect(10, 10, 100, 100); 