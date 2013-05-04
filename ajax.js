/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i]);
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest();
 else
  return false
}
function ajax(){
var mygetrequest=new ajaxRequest();
mygetrequest.open("GET", "http://localhost:8888/db_link.php?id=1", true);
mygetrequest.send(null);
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
   var jsondata=JSON.parse("("+mygetrequest.responseText+")"); //retrieve result as an JavaScript object
   var rssentries=jsondata.items;
   var output='<ul>';
   for (var i=0; i<rssentries.length; i++){
    output+='<li>';
    output+='<a href="'+rssentries[i].link+'">';
    output+=rssentries[i].title+'</a>';
    output+='</li>';
   }
   output+='</ul>';
   document.getElementById("result").innerHTML=output;
  }
  else{
   alert("An error has occured making the request");
  }
 }
}
}
