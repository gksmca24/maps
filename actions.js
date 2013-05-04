/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var list_open;
function actions(){
    var rightdiv=true;
    var click=true;
    var working=false;
    $("#rightbutton").click(function() {if(!working){
            working=true;
    document.getElementById("rightbutton").src="semileftright.png";
    if(!list_open)
    $("#filters").animate({width:'toggle'});
    if(click){
        if(!list_open){
    $("#content").animate({marginLeft:'324'});
    }else{
        $("#filters").css('margin-left',324);    
         $("#content").animate({marginLeft:'648'});
    }
    click=false;
    
    }
     if(rightdiv)
    rightdiv=false;
else{
    rightdiv=true;
document.getElementById("rightbutton").src="semileft.png";
    }
    working=false;
   }});
}
function getliststate(){
return list_open;
}
function listaction(open){
    var click=open;
    $("#listbutton").click(function() {
    if(click){
        document.getElementById("listbutton").src="semileftright.png";
//        $("#listview").animate({width:'toggle'});
    list_open=true;
    $("#content").animate({marginLeft:'324'});
    click=false;
    }
    else{
        document.getElementById("listbutton").src="semileft.png";
        $("#filters").animate({marginLeft:'0'});
        $("#content").animate({marginLeft:'0'});
    list_open=false;
    click=true;
    }
   });
    $("#listbutton").hover(function(){if(listdiv){document.getElementById("listbutton").src="semileft.png";}},function(){if(listdiv){document.getElementById("listbutton").src="semileft.png";}});
}
function open(){
$("#blind1").delay(1000).animate({height:'toggle'});
             $("img.lazy").lazyload({container: $("#list"),skip_invisible : false});

gotoparam();
}
