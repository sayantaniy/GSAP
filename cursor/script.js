
var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var imgDiv = document.querySelector('#image');
var overlay = document.querySelector('#overlay');

main.addEventListener('mousemove', function(dets){
   gsap.to(cursor,{
         x:dets.clientX,
         y:dets.clientY,
         duration:0.3
   })
});

imgDiv.addEventListener('mouseenter', function(){
   cursor.innerHTML=" view more"; //gitter effect
   gsap.to(cursor,{
         scale:4,   
   })
});

imgDiv.addEventListener('mouseleave', function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
         scale:1,    
   })
    
});