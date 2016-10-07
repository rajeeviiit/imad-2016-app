console.log('Loaded!');
var element =document.getElementById('main-text');
element.innerHTML='Rajeev Singh';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};

//counter code
var button =document.getElementById('counter');
var counter =0;
button.onclick=function(){
    //make the request to the counter endpoint
    
    //capture the response and store it in variable
    
    //render the variable in correct span
    counter =counter +1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};