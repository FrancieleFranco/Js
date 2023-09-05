

// seleciona o elemento do canvas
var canvas = document.getElementById('desenho');
 
// variável de contexto 2d
var ctx = canvas.getContext('2d');
 
// desenha um retângulo
ctx.fillRect(20, 20, 100, 100)
ctx.fillStyle = "rgb(180,0,0)";
ctx.fillRect(20, 20, 100, 100)
 
// segundo retângulo
ctx.fillStyle = "rgba(0,0,180,0.7)";
ctx.fillRect(30, 30, 100, 100)
