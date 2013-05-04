/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var prev_open
var open_id;
var desc;
var total_pics;
var complete1;
var complete2;
var bedrooms;
var type;
var area;
var area_location;
var bathrooms;
var kitchens;
var servant_rooms;
var balconies;
var furnishing;
var property_ownership;
var price;
var priceproj;
function filltable(){
    if(complete1){
       document.getElementById("details_table").innerHTML=''
    if(bedrooms&&bedrooms!=0)
       document.getElementById("details_table").innerHTML="<tr><td>Bedrooms:</td><td>"+bedrooms+"</td></tr>";
   if(type)
       document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Type:</td><td>"+type+"</td></tr>";
   if(area&&area!=0)
      document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Area:</td><td>"+area+"Sq. Ft.</td></tr>";
//   if(area_location)
//            document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>location:</td><td>"+area_location+",Gurgaon</td></tr>";    
    if(bathrooms&&bathrooms!=0){
              document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Bathrooms:</td><td>"+bathrooms+"</td></tr>";
    }
    if(kitchens&&kitchens!=0){
                      document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Kitchens:</td><td>"+kitchens+"</td></tr>";

    }
    if(servant_rooms&&servant_rooms!=0){
                      document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Servant Rooms:</td><td>"+servant_rooms+"</td></tr>";

    }
    if(balconies&&balconies!=0){
                      document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Balconies:</td><td>"+balconies+"</td></tr>";

    }
    if(furnishing&&furnishing!=''){
                      document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Furnishing:</td><td>"+furnishing+"</td></tr>";

    }
    if(property_ownership&&property_ownership!=''){
                      document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Ownership Type:</td><td>"+property_ownership+"</td></tr>";

    }
    if(price&&price!=0){
       var finalprice= getpriceunitlist(price,price)
                              document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Price:</td><td>"+finalprice[3]+" "+finalprice[0]+finalprice[2]+"</td></tr>";
    }
    if(priceproj&&!price){
         var finalprice1= getpriceunitlist(priceproj[0],priceproj[1])
                              document.getElementById("details_table").innerHTML=document.getElementById("details_table").innerHTML+"<tr><td>Price:</td><td>"+finalprice1[3]+" "+finalprice1[0]+"-"+finalprice1[1]+finalprice1[2]+"</td></tr>";
    
    }
}
else{
setTimeout(filltable,50);  

}
}

function getpriceunit(minprice,maxprice){
   var price=[];
   if(parseFloat(maxprice/10000000).toFixed(2)>=1){
        price.push(parseFloat(minprice/10000000).toFixed(1));
        price.push(parseFloat(maxprice/10000000).toFixed(1));
        price.push("cr.");
        price.push("Rs.");
    }
    else if(parseFloat(maxprice/100000).toFixed(2)>=1){
        price.push(parseFloat(minprice/100000).toFixed(1));
        price.push(parseFloat(maxprice/100000).toFixed(1));
        price.push("l.");
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
        price.push("Call For Price");
        price.push("");

    }
    return price;
}
function getpriceunitslider(minprice,maxprice){
   var price=[];
   if(parseFloat(maxprice/10000000).toFixed(2)>=1){
        price.push(parseFloat(minprice/10000000).toFixed(1));
        price.push(parseFloat(maxprice/10000000).toFixed(1));
        price.push("cr.");
        price.push("Rs.");
    }
    else if(parseFloat(maxprice/100000).toFixed(2)>=1){
        price.push(parseFloat(minprice/100000).toFixed(1));
        price.push(parseFloat(maxprice/100000).toFixed(1));
        price.push("l.");
        price.push("Rs.");
    }
    else  if(parseFloat(maxprice/1000).toFixed(2)>=1){
        price.push(minprice);
        price.push(maxprice);
        price.push("");
        price.push("Rs.");
    }
    else{
        price.push(minprice);
        price.push(maxprice);
        price.push("");
        price.push("");

    }
    return price;
}
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
var title_desc=[];
function description(id,id_change){
         $("#infowindow_videos_tab").hide();
		 $('.TabbedPanelsTab').animate({'padding-top' : '4px',
    'padding-right' : '13px',
    'padding-bottom' : '4px',
    'padding-left' : '13px'}, "fast");
         $(".conform").show();
                $("#thanks").hide();
                
            showvideos(id);
    complete1=false;
    complete2=false;
 bedrooms=false;
type=false;
area=0;
area_location='';
bathrooms=0;
kitchens=0;
servant_rooms=0;
balconies=0;
furnishing='';
property_ownership='';
price=0;
priceproj=[];
    if(getphotos(id)){
//        startslider();
    open_id=id;
    if(prev_open&&prev_open!=id&&id_change)
     $("#"+prev_open+"content").animate({height:'hide'});
//     if(!id_change){
//          document.getElementById("insideloader").innerHTML="<img src=\"loader.gif\">";
//     }
//    document.getElementById("loader").innerHTML="<img src=\"loading-2.gif\">";
    var mygetrequest=new ajaxRequest();
mygetrequest.open("GET", "nbproject/fullinfo.php?id="+id, true);
mygetrequest.send(null);
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
   var jsondata=JSON.parse(mygetrequest.responseText); //retrieve result as an JavaScript object
  if(!title_desc[id])
    document.getElementById("infowindow_title").innerHTML=jsondata[0].name;
else
    document.getElementById("infowindow_title").innerHTML=title_desc[id];
//    area_location=jsondata[0].location;
    if(jsondata[0].unique_id.substr(0,2)=="FA"){
                  area=parseInt(jsondata[0].super_area);
                  bathrooms=jsondata[0].bathrooms
                  drawing_rooms=jsondata[0].drawing_rooms;
                  dining_rooms=jsondata[0].dining_rooms;
                  kitchens=jsondata[0].kitchens;
                  servant_rooms=jsondata[0].servant_rooms;
                  balconies=jsondata[0].balconies;
                  furnishing=jsondata[0].furnishing;
                  property_ownership=jsondata[0].property_ownership;
                  price=jsondata[0].price;

    }
               bedrooms=jsondata[0].bedrooms;
          if(jsondata[0].unique_id.substr(0,2)=="PJ"){
       if(jsondata[0].rent_prop=="0"&&jsondata[0].sale_prop!="0"){
       type="sale";
       }else if(jsondata[0].rent_prop!="0"&&jsondata[0].sale_prop=="0"){
           type="rent";
       }else{
           type="rent/sale";
       }
        priceproj[0]=(jsondata[0].pricemin);
        priceproj[1]=(jsondata[0].pricemax);
       }else{
           if(jsondata[0].property_on==1){
                          type="rent";
           }
           else if(jsondata[0].sale_prop==2){
           type="sale";
           }
       }
   if(jsondata[0].canonical_url.indexOf(" ")==-1){
   if(jsondata[0].unique_id.substr(0,2)=="PJ"){
     document.getElementById("infowindow_details").innerHTML="<a onClick=\"if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;\" href='http://www.favista.com/"+jsondata[0].canonical_url+"-P"+id.substr(2)+".html' target=_blank>Details</a>";
              $("#infowindow_details").show();
}
   if(jsondata[0].unique_id.substr(0,2)=="FA"){
     document.getElementById("infowindow_details").innerHTML="<a onClick=\"if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;\" href='http://www.favista.com/"+jsondata[0].canonical_url+"-U"+id.substr(2)+".html' target=_blank>Details</a>";
         $("#infowindow_details").show();

 }
}else{
    $("#infowindow_details").hide();
}
}
  else{
   alert("An desc error has occured making the request");
  }
 }
 complete1=true;
}
if(id.substr(0,2)=="PJ"){
  var mygetrequest2=new ajaxRequest();
mygetrequest2.open("GET", "nbproject/getproperties.php?id="+id.substr(2), true);
mygetrequest2.send(null);
//   document.getElementById(id+"content").innerHTML="<table width=\"323\" border=\"0\" id=\""+id+"table\"></table>";
mygetrequest2.onreadystatechange=function(){
 if (mygetrequest2.readyState==4){
  if (mygetrequest2.status==200 || window.location.href.indexOf("http")==-1){
   var jsondata=JSON.parse(mygetrequest2.responseText); //retrieve result as an JavaScript object
         document.getElementById(id+"content").innerHTML='';
  for(var i=0;i<jsondata.length;i++){
    var sft='';
    if(jsondata[i].super_area!=0)
    if(jsondata[i].unit_type=='F'){
          sft="("+parseFloat(jsondata[i].super_area).toFixed(0)+" sft) "
      }
      else{
          sft="("+parseFloat(jsondata[i].super_area).toFixed(0)+" sq.yd.) "
      }
       if(jsondata[i].bedrooms!=0){
       var price=getpriceunitlist(jsondata[i].price,jsondata[i].price);
       if(jsondata[i].property_on=='2'){
           document.getElementById(id+"content").innerHTML=document.getElementById(id+"content").innerHTML+"<div id='salesubunit' class=\"prodlsunit\" style:\"z-index:"+($("#"+id).css('zIndex')*100-i)+"\" onmouseover='itemmouseover(\""+id+"\");' onmouseout='itemmouseout(\""+id+"\");' onclick='if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;description(\""+jsondata[i].unique_id+"\");'>"+jsondata[i].bedrooms+" BHK, "+sft+" <span class=\"WebRupee\">"+price[3]+"</span> "+price[0]+" "+price[2]+" <div style=\" float:right; color:#9f1515; font-weight:bold;\">SALE</div></div>";
       }  
       else{
          document.getElementById(id+"content").innerHTML=document.getElementById(id+"content").innerHTML+"<div id='rentsubunit' class=\"prodlsunit\" style:\"z-index:"+($("#"+id).css('zIndex')*100-i)+"\" onmouseover='itemmouseover(\""+id+"\");' onmouseout='itemmouseout(\""+id+"\");' onclick='if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;description(\""+jsondata[i].unique_id+"\");'>"+jsondata[i].bedrooms+" BHK, "+sft+"  <span class=\"WebRupee\">"+price[3]+"</span> "+price[0]+" "+price[2]+" <div style=\" float:right; color:#076ae5; font-weight:bold;\">RENT</div></div>";
    
   }
                      title_desc[jsondata[i].unique_id]=jsondata[i].bedrooms+" BHK, "+sft+" <span class=\"WebRupee\">"+price[3]+"</span> "+price[0]+" "+price[2];
       }
       else{
             price=getpriceunitlist(jsondata[i].price,jsondata[i].price);
       if(jsondata[i].property_on=='1'){
       document.getElementById(id+"content").innerHTML=document.getElementById(id+"content").innerHTML+"<div id='rentsubunit' class=\"prodlsunit\" style:\"z-index:"+($("#"+id).css('zIndex')*100-i)+"\" onmouseover='itemmouseover(\""+id+"\");' onmouseout='itemmouseout(\""+id+"\");' onclick='if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;description(\""+jsondata[i].unique_id+"\");'> "+sft+" <span class=\"WebRupee\">"+price[3]+"</span> "+price[0]+" "+price[2]+"   <div style=\" float:right; color:#076ae5; font-weight:bold;\">RENT</div></div>";
       }  
       else{
       document.getElementById(id+"content").innerHTML=document.getElementById(id+"content").innerHTML+"<div id='salesubunit' class=\"prodlsunit\" style:\"z-index:"+($("#"+id).css('zIndex')*100-i)+"\" onmouseover='itemmouseover(\""+id+"\");' onmouseout='itemmouseout(\""+id+"\");' onclick='if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;description(\""+jsondata[i].unique_id+"\");'> "+sft+" <span class=\"WebRupee\">"+price[3]+"</span> "+price[0]+" "+price[2]+" <div style=\" float:right; color:#9f1515; font-weight:bold;\"><div id='insideloader' style='position:absolute; height:10px; width:10px;'></div>SALE</div></div>";
       }
                               title_desc[jsondata[i].unique_id]=sft+" <span class=\"WebRupee\">"+price[3]+"</span> "+price[0]+" "+price[2]

       }
}
   
}
  else{
   alert("An error has occured making the request");
  }
 }
 complete2=true;
// resetprev_filter();
}
 $("#"+id+"content").animate({height:'toggle'});
}
else{
complete2=true;
}
filltable();
if(id_change)
    prev_open=id;
        shownearby();
}
}
function shownearby(){
    document.getElementById("infowindow_nearby").innerHTML="<div style=\"width:50%; float:left;\"><a href=\"#\" onClick=\"nearby('"+open_id+"','bank');\">Bank/ATM </a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','bakery');\">Bakery</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','grocery_or_supermarket');\">Supermarket</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','restaurant');\">Restaurant</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','bar');\">Bar</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','gym');\">Gym</a></br></div><div style=\"width:50%;float:left;\"><a href=\"#\" onClick=\"nearby('"+open_id+"','cafe');\">Cafe</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','shopping_mall');\">Shopping Mall</a></td></br><a href=\"#\" onClick=\"nearby('"+open_id+"','school');\">School</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','subway_station');\">Metro Station</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','bus_station');\">Bus Station</a></br><a href=\"#\" onClick=\"nearby('"+open_id+"','hospital');\">Hospital</a></div>";
}

function getphotos(id){
//    $("#slider").hide();
     var mygetrequest=new ajaxRequest();
mygetrequest.open("GET", "nbproject/getphotos.php?id="+id, true);
mygetrequest.send(null);
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
   var jsondata=JSON.parse(mygetrequest.responseText); //retrieve result as an JavaScript object
   document.getElementById("banner-fade").innerHTML='  <ul class="bjqs" id="slider"></ul>';
   total_pics=jsondata.length;
for(var i=0;i<jsondata.length;i++){
     var proj=id.substr(0,2);
     
                  if(proj==='PJ'){
                      var x=new Image();
                      x.src="http://prop.favistat.com/img/project_images/small/"+jsondata[i].image;
                      x.onload=function(){
                          $("#slider").show();
                      }
       document.getElementById("slider").innerHTML=document.getElementById("slider").innerHTML+"<li><img width='100%' height='100%' src='"+x.src+"'  onerror=\"$(this).parent().remove();startslider();\"></li>";
                  }else{
                       var x=new Image();
                      x.src="http://prop.favistat.com/img/property_images/small/"+jsondata[i].image;
           x.onload=function(){
                          $("#slider").show();
                      }
          document.getElementById("slider").innerHTML=document.getElementById("slider").innerHTML+"<li><img width='100%' height='100%' src='"+x.src+"'  onerror=\"$(this).parent().remove();startslider();\"></li>";
}}
 if(jsondata.length==0)
                document.getElementById("slider").innerHTML=document.getElementById("slider").innerHTML+"<li><img width='100%' height='100%' src=\"http://prop.favistat.com/img/project_images/small/1000_Trees_TYZJYKI1350466173.jpeg\"></li>";
}
  else{
   alert("An error has occured making the request");
  }
 }
startslider();
}
return true;
}

function startslider(){
   jQuery(document).ready(function($) {
          $('#banner-fade').bjqs({
            height      : 200,
            width       : 300,
            responsive  : true
          });
        });
}
function showvideos(id){
      var mygetrequest=new ajaxRequest();
mygetrequest.open("GET", "nbproject/getvideos.php?id="+id, true);
mygetrequest.send(null);
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
   var jsondata=JSON.parse(mygetrequest.responseText); //retrieve result as an JavaScript object
 if(jsondata.length>0){
     if(jsondata[0].walkthrough_url!=""){
 $("#videoiframe").attr('src',"http://www.youtube.com/embed/"+jsondata[0].walkthrough_url.substr(15));
     $("#infowindow_videos_tab").show();
	 $('.TabbedPanelsTab').animate({'padding-top' : '4px',
    'padding-right' : '7.5px',
    'padding-bottom' : '4px',
    'padding-left' : '7.5px'}, "fast");
     }
 }
}
  else{
   alert("An error has occured making the request");
  }
 }
}
}
