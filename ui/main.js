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

var counter=0;
app.get('/',function(req, res){
    counter = counter+1;
    res.send(counter.toString());
});