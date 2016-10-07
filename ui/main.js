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

button.onclick=function(){
    //create the request
    var request= new XMLHttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take action
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //do not yet
    };
    //make the request
    request.open('GET','http://rajeeviiit.imad.hasura-app.io/counter',true);
    request.send(null);
};



var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
     var request= new XMLHttpRequest();
    
    //capture the response and store it in variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take action
                if(request.status===200){
                   var names=request.responseText; 
                 names=JSON.parse(names);
                 
                 var list='';
                 for(var i=0;i<names.length;i++){
                 list +='<li>' +names[i] + '</li>';
      }
      var ul =document.getElementById('namelist');
      ul.innerHTML=list;
            }
        }
        //do not yet
    };
    //make the request
    var nameInput=document.getElementById('name');
var name=nameInput.value;
    request.open('GET','http://rajeeviiit.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
 
};


















