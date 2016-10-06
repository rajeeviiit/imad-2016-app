console.log('Loaded!');
var element =document.getElementById('main-text');
element.innerHTML='Rajeev Singh';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    img.style.marginLeft=marginLeft + "px";
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    
};