/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//importScripts('description.js');
var jsondata;
self.addEventListener('message', function(e) {
    if(e.data=="getjson"){
//    self.postMessage("test");
  var mygetrequest=new XMLHttpRequest();
mygetrequest.open("GET", "nbproject/db_link.php", true);
mygetrequest.send(null);
mygetrequest.onreadystatechange=function(){
     if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
         jsondata=JSON.parse(mygetrequest.responseText); //retrieve result as an JavaScript object
         self.postMessage(jsondata);
  }
     }
}
    }
//    else if(e.data=="getlist"){
//    
//         self.postMessage(btoa("response"));
//
//         self.postMessage(btoa(list));
//   }
}, false);

function getpriceunitlist(minprice,maxprice){
   var price=[];
   if(parseFloat(maxprice/10000000).toFixed(2)>=1){
        price.push(parseFloat(minprice/10000000).toFixed(2));
        price.push(parseFloat(maxprice/10000000).toFixed(2));
        price.push("cr.");
                price.push("Rs.");
    }
    else if(parseFloat(maxprice/100000).toFixed(2)>=1){
        price.push(parseFloat(minprice/100000).toFixed(2));
        price.push(parseFloat(maxprice/100000).toFixed(2));
        price.push("lacs.");
        price.push("Rs.");

    }
    else  if(parseFloat(maxprice/1000).toFixed(2)>=1){
        price.push(minprice);
        price.push(maxprice);
        price.push("");
                price.push("Rs.");

    }
    else{
        price.push("");
        price.push("");
        price.push("call for price");
                price.push("");

    }
    return price;
}