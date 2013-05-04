/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var mc1;
var mc2;
var mc3;
var mc4;
var mc5;
var mc6;
var mc7;
var mc8;
var mc9;
var mc10;
var mc11;
var mc12;
var mc13;
var clustericons;
var gurgaoncluster;
var markerfullarray;
 var map;
 var info;
 var fullinfo;
 var prev_selected;
 var prev_selected_marker;
 var opened_layerbounds;
 var prev_opened_layer;
 var marker_to_be_selected;
 var showlabels;
 var inmapmarkers;
 var showablemarkers;
var markerarray1;
var markerarray2;
    var markerarray3;
    var markerarray4;
    var markerarray5;
    var markerarray6;
    var markerarray7;
    var markerarray8;
    var markerarray9;
    var markerarray10;
    var markerarray11;
    var markerarray12;
 function getmarkertoselect(){
     return marker_to_be_selected;
 }
 function getprev_selected(){
     return prev_selected;
 }
 var selected_item;
 
      function initialize() {
          showlabels=false;
            labels()

//          $("#infowindow").draggable();
          
//          listaction(true);
 
           var mapOptions = {
          center: new google.maps.LatLng(28.4500, 77.0300),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
    
     panControl: false,
    
    streetViewControl: false,
     zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
        };
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);    
             google.maps.event.addListener(map,'click',function(){
              if (info) {
        info.close();
    }
 
             }); 
zoomfn();
  loadlayer()
    ajax();  
//    open(); 
//             google.maps.event.addListener(map, 'center_changed', function() {
//          for (var i=0; i<ggnmarkers.length; i++){
//    if( map.getBounds().contains(ggnmarkers[i].getPosition()) ){
//        inmapmarkers.push(ggnmarkers[i].get("id"));
////        ggnmarkers[i].setVisible(true);
//    }
////                ggnmarkers[i].setVisible(false);
//}
//   getlist(inmapmarkers);   
//  });
            if(info){
                info.close();
            }
            sliderinit();
            
      }
      function hidemarkercluster(){
          gurgaoncluster.setMaxZoom(30);
gurgaoncluster.repaint();
mc1.setMaxZoom(12);
mc1.repaint();
mc2.setMaxZoom(12);
mc2.repaint();
mc3.setMaxZoom(12);
mc3.repaint();
mc4.setMaxZoom(12);
mc4.repaint();
mc5.setMaxZoom(12);
mc5.repaint();
mc6.setMaxZoom(12);
mc6.repaint();
mc7.setMaxZoom(12);
mc7.repaint();
mc8.setMaxZoom(12);
mc8.repaint();
mc9.setMaxZoom(12);
mc9.repaint();
mc10.setMaxZoom(12);
mc10.repaint();
mc11.setMaxZoom(12);
mc11.repaint();
mc12.setMaxZoom(12);
mc12.repaint();

      }
      function icondecider(location,id,category,type,name,minprice,maxprice,bhk,cluster_id,show){
          var image;
          if(id.substr(0,2)=="PJ"){
          if(category=='Residential'){
                                      if(type=='sale'){
                                          image='markericon/res_prop_sale.png';
                                      }else if(type=='rent'){        
                                          image='markericon/res_prop_rent.png';
                               }else{
                                          image='markericon/res_proj.png';
                               }

          }
                    if(category=='Commercial'){
                        if(type=='sale'){
                             image='markericon/com_prop_sale.png';
                        }else  if(type=='rent'){
                             image='markericon/com_prop_rent.png';
                        }
                        else{
                             image='markericon/com_proj.png';
                        }
                    }
          }else{
               if(category=='Residential'){
                                      if(type=='sale'){
                                          image='markericon/res_prop_sale.png';
                                      }else{
                                          image='markericon/res_prop_rent.png';
                                      }

          }
                    if(category=='Commercial'){
                        if(type=='sale'){
                             image='markericon/com_prop_sale.png';
                        }else{
                             image='markericon/com_prop_rent.png';
                        }
                    }
          }
                   return placemarker(location,id,category,image,name,minprice,maxprice,bhk,cluster_id,show);
      }
      var opened;
      function placemarker(location,id,category,image,name,minprice,maxprice,bhk,cluster_id,show){
                opened=false;
                var zindex=10000;
                var price=getpriceunit(minprice,maxprice)
                if(minprice!=maxprice)
                var labelcontent=id;
            else
                var labelcontent=id;
        if(show==map){
        var marker = new MarkerWithLabel({
           position:location,
           draggable:false,
           map:show,
           category:category,
           id:id,
           bhk:bhk,
           name:name,
           icon:image,
           shadow:"markericon/shadow.png",
           cluster_id:cluster_id,
           visible:false,
           show:"show",
           minprice:minprice,
           maxprice:maxprice,
           labelContent: labelcontent,
           labelVisible:showlabels,
           labelAnchor: new google.maps.Point(32, 0),
           labelClass: "labels", // the CSS class for the label
           labelStyle: {opacity: 0.75}
          });
        }else{
            var marker = new google.maps.Marker({
           position:location,
           draggable:false,
           map:show,
           category:category,
           id:id,
           bhk:bhk,
           name:name,
           icon:image,
           cluster_id:cluster_id,
           visible:false,
           show:"not show",
           minprice:minprice,
           maxprice:maxprice,
           labelContent: labelcontent,
           labelVisible:showlabels,
           labelAnchor: new google.maps.Point(32, -10),
           labelClass: "labels", // the CSS class for the label
           labelStyle: {opacity: 0.75}
          }); 
        }
          
           google.maps.event.addListener(marker, 'mouseover', function() {
//               marker.setOptions({labelVisible:true});
               if (info) {
        info.close();
    }
    $("#"+marker.get("id")).css("background","#d2e8c8");
             $("#list").stop(true);
     var container = $("#list"),
    scrollTo =$('#'+marker.get("id"));
    if(!opened){
    var scroll=scrollTo.offset().top - container.offset().top + container.scrollTop();
    container.animate({scrollTop:scroll},200);

           }
    marker.setZIndex(1);
    zindex=10000;
    marker.setZIndex(zindex);
    var boxText = document.createElement("div");
        boxText.style.cssText = "color:#000; margin-top: 8px; background: #fff; padding: 5px; border:1px solid #ccc; border-radius:3px; box-shadow:3px 3px 3px #999;";
        if(marker.get("bhk")!=0&&marker.get("bhk")!=''&&marker.get("bhk")!=null&&marker.get("bhk")!="null"&&marker.get("name").indexOf("BHK", "")==-1){
        boxText.innerHTML =marker.get("name")+" "+marker.get("bhk")+" BHK"+"<div style=\"font-size:11px; text-align:right;\" >"+labelcontent+"</div>";
        }
                else{
                            boxText.innerHTML = marker.get("name")+"<div style=\"font-size:11px; text-align:right;\">"+labelcontent+"</div>";    
            }
       var myOptions = {
                 content: boxText
                ,disableAutoPan: false
                ,maxWidth: 0
                ,pixelOffset: new google.maps.Size(-100, 10)
                ,zIndex: null
                ,boxStyle: { 
                  opacity: 1
                  ,width: "200px"
                 }
                ,closeBoxMargin: "10px 2px 2px 2px"
                ,closeBoxURL: ""
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,pane: "floatPane"
                ,enableEventPropagation: false
        };

        info = new InfoBox(myOptions);
        info.open(map, marker);
           });
             google.maps.event.addListener(marker, 'mouseout', function() {
                 if(marker.get("id")!=selected_item)
                     $("#"+marker.get("id")).css("background","");
//               marker.setOptions({labelVisible:false});
               if (info) {
        info.close();
    }
    zindex=1000;
             marker.setZIndex(zindex);
             if(selected_item!=marker.get("id")){
             document.getElementById(marker.get("id")).className='propdls';
             }
           });
         google.maps.event.addListener(marker, 'click', function() {
//              clearnearby();    
             var container = $("#list"),
    scrollTo = $('#'+marker.get("id"));
    var scroll=scrollTo.offset().top - container.offset().top + container.scrollTop();
    container.animate({scrollTop:scroll},600);
         
         if(marker.get("id")!=prev_selected){
             opened=false;
     description(id,true);
     }else if(!opened){
              description(id,true);
     }else{
                        $("#"+marker.get("id")+"content").animate({height:'toggle'});  

     }
     selected_item=marker.get("id");
         $("#"+selected_item).css("background","#d2e8c8");
     if(prev_selected){
      document.getElementById(prev_selected).className='propdls';
          $("#"+prev_selected).css("background","");
//      document.getElementById(selected_item).className='propdlsover';
     markerfullarray[prev_selected].setIcon(prev_selected_marker);
         }
     prev_selected=marker.get("id");
     prev_selected_marker=marker.get("icon");
     if(marker.get("id").substr(0,2)=="PJ"){
     if(marker.get("category")=="Residential")
     marker.setIcon('markericon/res_proj_sel.png');
 else
          marker.setIcon('markericon/com_proj_sel.png');
     }else{
          if(marker.get("category")=="Residential")
     marker.setIcon('markericon/selected_residential.png');
 else
          marker.setIcon('markericon/selected_commercial.png');
     }
      if(opened){
              $("#"+selected_item).css("background","#ffffff");
                document.getElementById(selected_item).className='propdls';
     markerfullarray[selected_item].setIcon(prev_selected_marker);
  }if(!opened){
      $("#photos").click();
           $("#infowindow").show();
  }
     if(map.getZoom()<14)
     map.setZoom(14);
//    map.panTo(markerfullarray[id].get("position"));

                  opened=!opened;
  });
  return marker;
      }
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
var infolayer;
function layer(coords,name,id,zoom){
    var layer;
     layer = new google.maps.Polygon({
    paths: coords,
    strokeColor: "#000000",
    strokeOpacity: 0,
    strokeWeight: 3,
    fillColor: "#000000",
    fillOpacity: 0,
    name:name,
    id:id
    
  });
  layer.setMap(map);
google.maps.event.addListener(layer,"mouseover",function(){
 this.setOptions({fillColor: "#999900"});
  this.setOptions({fillOpacity: "0.10"});
  this.setOptions({strokeColor: "#3d8516"});
    this.setOptions({strokeOpacity: ".3"});
 $("#content").show();
 document.getElementById("title").innerHTML="<font color=white size=6>"+layer.get("name")+"</font>";
  if (info) {
        info.close();
    }
}); 

google.maps.event.addListener(layer,"mouseout",function(){
    $("#content").hide();
 this.setOptions({fillColor: "#000000"});
   this.setOptions({fillOpacity: "0"});
   this.setOptions({strokeColor: "#000000"});
    this.setOptions({strokeOpacity: "0.01"});
 if (info) {
        info.close();
    }
});
google.maps.event.addListener(layer,"click",function(){
            map.panTo(getcenter(coords));
        if(map.getZoom()<zoom)
map.setZoom(zoom);
    resetprev_filter();
});
return layer;
}
function getmarkerfullarray(){
return markerfullarray;
}
var commercialmarkers;
var residentialmarkers;
var salemarkers;
var rentmarkers;
var readytomovemarkers;
var justlaunchedmarkers;
var underconstructionmarkers;
var ggnmarkers;
var allmarkers;
function ajax(){
//           $("#leftsidebar").animate({"left" : "0px"}, "slow");
//    $('.searchwhide').hide("fast");
    inmapmarkers=[]
    markerfullarray=[];
    commercialmarkers=[];
    residentialmarkers=[];
    salemarkers=[];
    rentmarkers=[];
     readytomovemarkers=[];
 justlaunchedmarkers=[];
 underconstructionmarkers=[];
     ggnmarkers=[];
     allmarkers=[]
     clustericons=[];
     showablemarkers=[];
     var list="";
     document.getElementById("list").innerHTML="";
//var mygetrequest=new ajaxRequest();
//mygetrequest.open("GET", "nbproject/db_link.php", true);
//mygetrequest.send(null);
var worker = new Worker('worker.js');
    markerarray1=[];
    markerarray2=[];
    markerarray3=[];
    markerarray4=[];
    markerarray5=[];
    markerarray6=[];
    markerarray7=[];
    markerarray8=[];
    markerarray9=[];
    markerarray10=[];
    markerarray11=[];
    markerarray12=[];
    var countdata=[];
     var mygetrequest=new XMLHttpRequest();
mygetrequest.open("GET", "nbproject/getcount.php", true);
mygetrequest.send(null);
mygetrequest.onreadystatechange=function(){
     if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
         countdata=JSON.parse(mygetrequest.responseText); //retrieve result as an JavaScript object
  
}
     }
       clustericons[0]=[addoverlay(map,iconcenter("ggn"),countdata[0].count,true)];
    clustericons[1]=[addoverlay(map,iconcenter("1"),countdata[1].count,false),
                    addoverlay(map,iconcenter("2"),countdata[2].count,false),
                    addoverlay(map,iconcenter("3"),countdata[3].count,false),
                    addoverlay(map,iconcenter("4"),countdata[4].count,false),
                    addoverlay(map,iconcenter("5"),countdata[5].count,false),
                    addoverlay(map,iconcenter("6"),countdata[6].count,false),
                    addoverlay(map,iconcenter("8"),countdata[7].count,false),
                    addoverlay(map,iconcenter("9"),countdata[8].count,false),
                    addoverlay(map,iconcenter("10"),countdata[9].count,false),
                    addoverlay(map,iconcenter("11"),countdata[10].count,false),
                    addoverlay(map,iconcenter("12"),countdata[11].count,false),
                    addoverlay(map,iconcenter("13"),countdata[12].count,false),
                    ]
}
     
    var argument="getjson";
        worker.postMessage(argument);
                         var list="";
worker.addEventListener('message', function(e) {
    if(argument=="getjson"){
    var jsondata=e.data;
  document.getElementById("list").innerHTML="";
  for (var i=0; i<jsondata.length; i++){    
       var type;
       var Latlng = new google.maps.LatLng(jsondata[i].lat,jsondata[i].lon);
        if(jsondata[i].unique_id.substr(0,2)=="PJ"){
       if(jsondata[i].rent_prop=="0"&&jsondata[i].sale_prop!="0"){
       type="sale";
       }else if(jsondata[i].rent_prop!="0"&&jsondata[i].sale_prop=="0"){
           type="rent";
       }else{
           type="";
       }
       }else{
           if(jsondata[i].rent_prop==1){
                          type="rent";
           }
           else if(jsondata[i].sale_prop==2){
           type="sale";
           }
       }
       var show=null;
       if((jsondata[i].show_id==0||jsondata[i].show_id==-1)&&jsondata[i].unique_id.substr(0,2)=="FA"){
           show=map;
       }else if(jsondata[i].unique_id.substr(0,2)=="PJ"){
           show=map;
       }
       var marker=icondecider(Latlng,jsondata[i].unique_id,jsondata[i].category,type,jsondata[i].proj_name,jsondata[i].pricemin,jsondata[i].pricemax,jsondata[i].bhk,jsondata[i].cluster_id,show);
      markerfullarray[jsondata[i].unique_id]=marker;
       ggnmarkers.push(marker);
       allmarkers.push(marker);
if(show!=null){
    showablemarkers.push(marker)
}
       if(jsondata[i].pricemin!=0&&jsondata[i].pricemin!="null")
        if(jsondata[i].phase==1){
           justlaunchedmarkers.push(marker);
       }else if(jsondata[i].phase==2){
           underconstructionmarkers.push(marker);
       }else if(jsondata[i].phase==3){
           readytomovemarkers.push(marker);
       }
       if(jsondata[i].category=='Residential'){
           residentialmarkers.push(marker);
       }
       if(jsondata[i].category=='Commercial'){
           commercialmarkers.push(marker);
       }
       if(jsondata[i].unique_id.substr(0,2)=="PJ"){
       if(jsondata[i].rent_prop=="0"&&jsondata[i].sale_prop!="0"){
           salemarkers.push(marker);
       }else if(jsondata[i].rent_prop!="0"&&jsondata[i].sale_prop=="0"){
           rentmarkers.push(marker);
       }else{
           
       }
       }else{
           if(jsondata[i].rent_prop==1){
               rentmarkers.push(marker);
           }
           else if(jsondata[i].sale_prop==2){
               salemarkers.push(marker);
           }
       }
       if(jsondata[i].cluster_id==1){
       
      markerarray1.push(marker);
   }
      if(jsondata[i].cluster_id==2){
       
      markerarray2.push(marker);
   }
      if(jsondata[i].cluster_id==3){
       
      markerarray3.push(marker);
   }
      if(jsondata[i].cluster_id==4){
       
      markerarray4.push(marker);
   }
      if(jsondata[i].cluster_id==5){
       
      markerarray5.push(marker);
   }
      if(jsondata[i].cluster_id==6){
       
      markerarray6.push(marker);
   }
      if(jsondata[i].cluster_id==8){
       
      markerarray7.push(marker);
   }
      if(jsondata[i].cluster_id==9){
       
      markerarray8.push(marker);
   }
      if(jsondata[i].cluster_id==10){
       
      markerarray9.push(marker);
   }
      if(jsondata[i].cluster_id==11){
       
      markerarray10.push(marker);
   }
      if(jsondata[i].cluster_id==12){
       
      markerarray11.push(marker);
   }
      if(jsondata[i].cluster_id==13){
       
      markerarray12.push(marker);
   } 
       var proj=jsondata[i].unique_id.substr(0,2);
                  var price=getpriceunitlist(jsondata[i].pricemin,jsondata[i].pricemax);
              if(proj==='PJ'){
                   var x;
x ="http://prop.favistat.com/img/project_images/thumbnails/"+jsondata[i].image;
	   if(jsondata[i].rent_prop=="0"&&jsondata[i].sale_prop!="0"){
                  list=list+"<div id='"+jsondata[i].unique_id+"' onmouseover='itemmouseover(\""+jsondata[i].unique_id+"\");' onmouseout='itemmouseout(\""+jsondata[i].unique_id+"\");' onclick='infoopen(\""+jsondata[i].unique_id+"\");' class=\"propdls\" style=\"z-index:"+((i)*100)+";\"><img class='lazy' src=\"images/error.jpg\" data-original="+x+" onerror='this.src=\"images/error.jpg\"' class='logoimg'/><p>"+jsondata[i].proj_name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div class=\"sale\">Sale: "+jsondata[i].sale_prop+"</div><div id='"+jsondata[i].unique_id+"content' onclick='listclick(event)'  style=\"display:none;\"></div></div>";
           }else if(jsondata[i].rent_prop!="0"&&jsondata[i].sale_prop=="0"){
               	  list=list+"<div id='"+jsondata[i].unique_id+"' onmouseover='itemmouseover(\""+jsondata[i].unique_id+"\");' onmouseout='itemmouseout(\""+jsondata[i].unique_id+"\");' onclick='infoopen(\""+jsondata[i].unique_id+"\");' class=\"propdls\" style=\"z-index:"+((i)*100)+";\"><img class='lazy' src=\"images/error.jpg\" data-original="+x+" onerror='this.src=\"images/error.jpg\"'  class='logoimg'/><p>"+jsondata[i].proj_name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div class=\"rent\">Rent: "+jsondata[i].rent_prop+"</div><div id='"+jsondata[i].unique_id+"content' onclick='listclick(event)'  style=\"display:none;\"></div></div>";
           }else if(jsondata[i].rent_prop=="0"&&jsondata[i].sale_prop=="0"){
               	  list=list+"<div id='"+jsondata[i].unique_id+"' onmouseover='itemmouseover(\""+jsondata[i].unique_id+"\");' onmouseout='itemmouseout(\""+jsondata[i].unique_id+"\");' onclick='infoopen(\""+jsondata[i].unique_id+"\");' class=\"propdls\" style=\"z-index:"+((i)*100)+";\"><img class='lazy' src=\"images/error.jpg\" data-original="+x+" onerror='this.src=\"images/error.jpg\"'  class='logoimg'/><p>"+jsondata[i].proj_name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div id='"+jsondata[i].unique_id+"content' onclick='listclick(event)'  style=\"display:none;\"></div></div>";
           }else{
        	  list=list+"<div id='"+jsondata[i].unique_id+"' onmouseover='itemmouseover(\""+jsondata[i].unique_id+"\");' onmouseout='itemmouseout(\""+jsondata[i].unique_id+"\");' onclick='infoopen(\""+jsondata[i].unique_id+"\");' class=\"propdls\" style=\"z-index:"+((i)*100)+";\"><img class='lazy' src=\"images/error.jpg\" data-original="+x+" onerror='this.src=\"images/error.jpg\"'  class='logoimg'/><p>"+jsondata[i].proj_name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div class=\"sale\">Sale: "+jsondata[i].sale_prop+" <span style=\"color:#076ae5;\"> Rent: "+jsondata[i].rent_prop+"</span></div><div id='"+jsondata[i].unique_id+"content' onclick='listclick(event)'  style=\"display:none;\"></div></div>";   
           }
       }else{
                    var x;
x ="http://prop.favistat.com/img/property_images/thumbnails/"+jsondata[i].image;
           list=list+"<div id='"+jsondata[i].unique_id+"' onmouseover='itemmouseover(\""+jsondata[i].unique_id+"\");' onmouseout='itemmouseout(\""+jsondata[i].unique_id+"\");' onclick='infoopen(\""+jsondata[i].unique_id+"\");' class=\"propdls\" style=\"z-index:"+((i)*100)+";\"><img class='lazy' src=\"images/error.jpg\" data-original="+x+" onerror='this.src=\"images/error.jpg\"'  width=\"42\" height=\"42\" /><p>"+jsondata[i].proj_name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" "+price[2]+"</span></p><div id='"+jsondata[i].unique_id+"content' onclick='listclick(event)'  style=\"display:none;\"></div></div>";
       }
   }
        
          $("#list").html(list);
      var container = $("#list");
    container.animate({scrollTop:1},600);
    open();
    }
}, false);
}
 
function getareacluster(id){
mc1.setMaxZoom(12);
mc1.repaint();
mc2.setMaxZoom(12);
mc2.repaint();
mc3.setMaxZoom(12);
mc3.repaint();
mc4.setMaxZoom(12);
mc4.repaint();
mc5.setMaxZoom(12);
mc5.repaint();
mc6.setMaxZoom(12);
mc6.repaint();
mc7.setMaxZoom(12);
mc7.repaint();
mc8.setMaxZoom(12);
mc8.repaint();
mc9.setMaxZoom(12);
mc9.repaint();
mc10.setMaxZoom(12);
mc10.repaint();
mc11.setMaxZoom(12);
mc11.repaint();
mc12.setMaxZoom(12);
mc12.repaint();
if(id==1)
return mc1;
else if(id==2)
return mc2;
else if(id==3)
return mc3;
else if(id==4)
return mc4;
else if(id==5)
return mc5;
else if(id==6)
return mc6;
else if(id==8)
return mc7;
else if(id==9)
return mc8;
else if(id==10)
return mc9;
else if(id==11)
return mc10;
else if(id==12)
return mc11;
else if(id==13)
return mc12;

}
function getmap(){
return map;
}
function iconcenter(id){
//    alert(id);
if(id=='ggn'){
        return getcenter(getgurgaon());
    }
    else if(id==1){
//            alert(id);
        return getcenter(getdlfcity());
    }
     else if(id==2){
       return getcenter(getudyogvihar());
    } 
    else if(id==3){
//            alert(id);
        return getcenter(getgolfcourseroad());
    }
     else if(id==4){
//            alert(id);
        return getcenter(getoldgurgaon());
    }
    else if(id==5){
//            alert(id);
        return getcenter(getsohnaroad());
    }
     else if(id==6){
//            alert(id);
        return getcenter(getpalamvihar());
    } 
    else if(id==8){
//            alert(id);
        return getcenter(getcentralgurgaon());
    }
     else if(id==9){
//            alert(id);
        return getcenter(getindustrialhub());
    }else if(id==10){
//            alert(id);
        return getcenter(getgolfcourseextention());
    }
     else if(id==11){
//            alert(id);
//    var manual=getcenter(getdwarkaexpressway());
   manual=new google.maps.LatLng(28.488775828226555, 76.99288083837655);
   return manual;
    }else if(id==12){
//            alert(id);
        return getcenter(getnewgurgaonnorth());
    }
     else if(id==13){
//            alert(id);
        return getcenter(getnewgurgaonsouth());
    } 
    
   
    
}
var clickfromlist
     google.maps.event.addDomListener(window, 'load', initialize);
     function itemmouseover(id){
         $("#list").stop(true);
    $("#"+id).css("background","#d2e8c8");
           
}
    function itemmouseout(id){
       if(selected_item!=id){
    $("#"+id).css("background","");
             }
        if(info){
            info.close();
        }
        if(opened)
        map.panTo(markerfullarray[selected_item].getPosition());
//           google.maps.event.trigger(markerfullarray[id], 'mouseout');
}
function infoopen(id){
  google.maps.event.trigger(markerfullarray[id], 'click');
    
}
var justlaunch=true;
var undercons=true;
var readytomove=true;
var resi=true;
var comm=true;
var sale=true;
var rent=true;
var comm_clicked;
var resi_clicked;
var sale_clicked;
var rent_clicked;

function updatelist(){
    if(!justlaunch){
        filter("just launched");
    }
    if(!undercons){
        filter("underconstruction");
    }
    if(!readytomove){
        filter("ready to move");
    }
    if(!resi){
        filter("residential");
    }
    if(!comm){
        filter("commercial");
    }
    if(!sale){
        filter("sale");
    }
    if(!rent){
        filter("rent");
    }
}
function resetprev_filter(){
//    $( "#slider-range").trigger('change');
    if(!justlaunch){
for(var i=0;i<justlaunchedmarkers.length;i++){
           justlaunchedmarkers[i].setVisible(false);
           $("#"+justlaunchedmarkers[i].get("id")).hide();
       }}
    if(!undercons){
 for(var i=0;i<underconstructionmarkers.length;i++){
           underconstructionmarkers[i].setVisible(false);
           $("#"+underconstructionmarkers[i].get("id")).hide();
       }}
    if(!readytomove){
 for(var i=0;i<readytomovemarkers.length;i++){
           readytomovemarkers[i].setVisible(false);
           $("#"+readytomovemarkers[i].get("id")).hide();
       }}
    if(!resi){
         for(var i=0;i<residentialmarkers.length;i++){
           residentialmarkers[i].setVisible(false);
           $("#"+residentialmarkers[i].get("id")).hide();
       }
    }
    if(!comm){
       for(var i=0;i<commercialmarkers.length;i++){
           commercialmarkers[i].setVisible(false);
           $("#"+commercialmarkers[i].get("id")).hide();
       }
    }
    if(!sale){
        for(var i=0;i<salemarkers.length;i++){
           salemarkers[i].setVisible(false);
           $("#"+salemarkers[i].get("id")).hide();
       }
    }
    if(!rent){
        for(var i=0;i<rentmarkers.length;i++){
           rentmarkers[i].setVisible(false);
           $("#"+rentmarkers[i].get("id")).hide();
       }
    }
//       mc1.repaint();
//   mc2.repaint();
//   mc3.repaint();
//   mc4.repaint();
//   mc5.repaint();
//   mc6.repaint();
//   mc7.repaint();
//   mc8.repaint();
//   mc9.repaint();
//   mc10.repaint();
//   mc11.repaint();
//   mc12.repaint();
}
function filter(category){
    if(opened)
        google.maps.event.trigger(markerfullarray[selected_item], 'click');
    map.setZoom(14);
   if(category=='residential'){
       if(resi_clicked){
           $("#resifilter").click();
       }
if(resi){ 
       for(var i=0;i<residentialmarkers.length;i++){
           residentialmarkers[i].setVisible(false);
           $("#"+residentialmarkers[i].get("id")).hide();
       }
       resi=false;
       comm_clicked=true;
}
else{
     for(var i=0;i<residentialmarkers.length;i++){
           residentialmarkers[i].setVisible(true);
           $("#"+residentialmarkers[i].get("id")).show();
       }
       resi=true;
       comm_clicked=false;
}
   } 
   if(category=='commercial'){
       if(comm_clicked){
           $("#commfilter").click();
       }
      if(comm){
       for(var i=0;i<commercialmarkers.length;i++){
           commercialmarkers[i].setVisible(false);
           $("#"+commercialmarkers[i].get("id")).hide();
       }
       comm=false;
       resi_clicked=true;
}
else{
     for(var i=0;i<commercialmarkers.length;i++){
           commercialmarkers[i].setVisible(true);
           $("#"+commercialmarkers[i].get("id")).show();
       }
       comm=true;
       resi_clicked=false;
}
   } 
   if(category=='rent'){
          if(rent_clicked){
           $("#rentfilter").click();
       }
      if(rent){
       for(var i=0;i<rentmarkers.length;i++){
           rentmarkers[i].setVisible(false);
           $("#"+rentmarkers[i].get("id")).hide();
       }
       rent=false;
       sale_clicked=true;
}
else{
     for(var i=0;i<rentmarkers.length;i++){
           rentmarkers[i].setVisible(true);
           $("#"+rentmarkers[i].get("id")).show();
       }
       rent=true;
              sale_clicked=false;

}
       
   }
    if(category=='sale'){
           if(sale_clicked){
           $("#buyfilter").click();
       }
     if(sale){
       for(var i=0;i<salemarkers.length;i++){
           salemarkers[i].setVisible(false);
           $("#"+salemarkers[i].get("id")).hide();
       }
       sale=false;
       rent_clicked=true;
}
else{
     for(var i=0;i<salemarkers.length;i++){
           salemarkers[i].setVisible(true);
           $("#"+salemarkers[i].get("id")).show();
       }
       sale=true;
       rent_clicked=false;
}
       
   }
      if(category=='just launched'){
 if(justlaunch){
       for(var i=0;i<justlaunchedmarkers.length;i++){
           justlaunchedmarkers[i].setVisible(false);
           $("#"+justlaunchedmarkers[i].get("id")).hide();
       }
       justlaunch=false;
}
else{
     for(var i=0;i<justlaunchedmarkers.length;i++){
           justlaunchedmarkers[i].setVisible(true);
           $("#"+justlaunchedmarkers[i].get("id")).show();
       }
       justlaunch=true;
}
       
       
   }
      if(category=='underconstruction'){
     if(undercons){
       for(var i=0;i<underconstructionmarkers.length;i++){
           underconstructionmarkers[i].setVisible(false);
           $("#"+underconstructionmarkers[i].get("id")).hide();
       }
       undercons=false;
}
else{
     for(var i=0;i<underconstructionmarkers.length;i++){
           underconstructionmarkers[i].setVisible(true);
           $("#"+underconstructionmarkers[i].get("id")).show();
       }
       undercons=true;
}
       
   }
      if(category=='ready to move'){
           if(readytomove){
       for(var i=0;i<readytomovemarkers.length;i++){
           readytomovemarkers[i].setVisible(false);
           $("#"+readytomovemarkers[i].get("id")).hide();
       }
       readytomove=false;
}
else{
     for(var i=0;i<readytomovemarkers.length;i++){
           readytomovemarkers[i].setVisible(true);
           $("#"+readytomovemarkers[i].get("id")).show();
       }
       readytomove=true;
}
       
   }
//   mc1.repaint();
//   mc2.repaint();
//   mc3.repaint();
//   mc4.repaint();
//   mc5.repaint();
//   mc6.repaint();
//   mc7.repaint();
//   mc8.repaint();
//   mc9.repaint();
//   mc10.repaint();
//   mc11.repaint();
//   mc12.repaint();
}
function closeinfowindow(){
    clearnearby();
    $("#infowindow").hide();
    $("#videoiframe").attr("src","");
    $("#infowindow_videos_tab").hide();
    
}
function resetprev(){
    prev_selected=null;
}
function gotoparam(){
    showlabels=false;
  var query = window.location.search.substring(1);
  if(query.split("=")[0]=="marker_id"){
        var marker_id = query.split("=")[1];
   if(marker_id){
       marker_to_be_selected=marker_id;
google.maps.event.trigger(getlayers()[markerfullarray[marker_id].get("cluster_id")],'click');
//google.maps.event.trigger(markerfullarray[marker_id], 'click');}
//$("#"+marker_id).click();
//clickmarkertoselect();
   }
   }
}
function labels(){
      var query = window.location.search.substring(1);
    if(query.split("=")[0]=="label"){
       if(query.split("=")[1]=='1'){
           showlabels=true;
       }
   }
}
function hideallmarkers(){
    for(var i=0;i<ggnmarkers.length;i++){
        ggnmarkers[i].setVisible(false);
    }
    markerfullarray[selected_item].setVisible(true);
}
function showallmarkers(){
     for(var i=0;i<ggnmarkers.length;i++){
        ggnmarkers[i].setVisible(true);
    }
    resetprev_filter();
//    mc1.repaint();
//   mc2.repaint();
//   mc3.repaint();
//   mc4.repaint();
//   mc5.repaint();
//   mc6.repaint();
//   mc7.repaint();
//   mc8.repaint();
//   mc9.repaint();
//   mc10.repaint();
//   mc11.repaint();
//   mc12.repaint();
}
function findcorrect(){
   var layers=getlayers();
   for(var i=0;i<ggnmarkers.length;i++){
   for(var j=0;j<layers.length;j++){
   if(layers[j].containsLatLng(ggnmarkers[i].get("position"))){
       if(ggnmarkers[i].get("cluster_id")!=layers[j].get("id")){
           alert(ggnmarkers[i].get("id")+ggnmarkers[i].get("cluster_id"));
       }
   }
   }
   }
}
function clickmarkertoselect(){
  
//           alert(marker_to_be_selected);
    var run=setInterval(function(){
        var container = $("#list");
   var scrollTo =$('#'+marker_to_be_selected);
    var scroll=scrollTo.offset().top - container.offset().top + container.scrollTop();
    container.animate({scrollTop:scroll},600);
    google.maps.event.trigger(markerfullarray[marker_to_be_selected], 'click');
if($("#infowindow").length>0){
    clearInterval(run);
}    
},3000);
}
function formsubmit(){
    
        var incomplete = $('.conform :input').filter(function() {
                             return $(this).val() == '';
                         });
        //if incomplete contains any elements, the form has not been filled 
        if(incomplete.length>0) {
            alert('please fill out the form');
            //to prevent submission of the form
            return false;
        }else{
//                alert("http://leads.favista.in/mailer/sendMail.php?"+$(".conform").serialize()+"&proj_id="+selected_item+"&source_name=FavistaMaps&project_name="+document.getElementById("infowindow_title").innerHTML);
                $.post("http://leads.favista.in/mailer/sendMail.php?"+$(".conform").serialize()+"&proj_id="+selected_item+"&source_name=FavistaMaps&project_name="+document.getElementById("infowindow_title").innerHTML);
                $("#resetBtn").click();
                $(".conform").hide();
                $("#thanks").show();          
}
    return false;
}
var slidermin;
var slidermax;
function sliderinit(){
    $(function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 400,
			max: 869.88,
			values: [ 400, 869.88 ],
                        slide:function( event, ui ) {
                         var pricemin=  getpriceunitslider(Math.pow(10, ui.values[0]/100).toFixed(0),Math.pow(10, ui.values[0]/100).toFixed(0))
                         var pricemax=  getpriceunitslider(Math.pow(10, ui.values[1]/100).toFixed(0),Math.pow(10, ui.values[1]/100).toFixed(0))
				$( "#amount" ).val( "Rs." +pricemin[0]+" "+pricemin[2]+ " - Rs." + pricemax[0]+" "+pricemax[2] );
		for(var i=0;i<allmarkers.length;i++){
                   if(parseFloat(Math.pow(10, ui.values[0]/100))<parseFloat(allmarkers[i].get("minprice"))&&parseFloat(allmarkers[i].get("minprice"))<parseFloat(Math.pow(10, ui.values[1]/100))){
                                              allmarkers[i].setVisible(true);
                                               $("#"+allmarkers[i].get("id")).show();          
               }
                   else {
                       allmarkers[i].setVisible(false);
                         $("#"+allmarkers[i].get("id")).hide();          
                   }
                }
                resetprev_filter()
//                  mc1.repaint();
//                  mc2.repaint();
//                  mc3.repaint();
//                  mc4.repaint();
//                  mc5.repaint();
//                  mc6.repaint();
//                  mc7.repaint();
//                  mc8.repaint();  
//                  mc9.repaint();
//                  mc10.repaint();
//                  mc11.repaint();
//                  mc12.repaint();
                    }
                 
		});
                $("#slider-range").bind({change:function(){
		for(var i=0;i<allmarkers.length;i++){
                   if(parseFloat(Math.pow(10, $( "#slider-range" ).slider( "values", 0 )/100))<parseFloat(allmarkers[i].get("minprice"))&&parseFloat(allmarkers[i].get("minprice"))<parseFloat(Math.pow(10, $( "#slider-range" ).slider( "values", 1 )/100))){
                                              allmarkers[i].setVisible(true);
                                               $("#"+allmarkers[i].get("id")).show();          
               }
                   else {
                       allmarkers[i].setVisible(false);
                         $("#"+allmarkers[i].get("id")).hide();          
                   }
                }
                  mc1.repaint();
                  mc2.repaint();
                  mc3.repaint();
                  mc4.repaint();
                  mc5.repaint();
                  mc6.repaint();
                  mc7.repaint();
                  mc8.repaint();  
                  mc9.repaint();
                  mc10.repaint();
                  mc11.repaint();
                  mc12.repaint();
                  }});
                   var pricemin=  getpriceunitslider(Math.pow(10,  $( "#slider-range" ).slider( "values", 0 )/100),Math.pow(10,  $( "#slider-range" ).slider( "values", 0 )/100))
                         var pricemax=  getpriceunitslider(Math.pow(10,  $( "#slider-range" ).slider( "values", 1 )/100),Math.pow(10,  $( "#slider-range" ).slider( "values", 1 )/100))
                       $( "#amount" ).val( "Rs." +pricemin[0]+" "+pricemin[2]+ " - Rs." + pricemax[0]+" "+pricemax[2] );

	});
}
function zoomfn(){
 google.maps.event.addListener(map, "zoom_changed", function () {
     if(map.getZoom()>=14){
          clustericons[0][0].setVisible(false)
        for(var i=0;i<clustericons[1].length;i++){
            clustericons[1][i].setVisible(false);
        }
        for(var i=0;i<showablemarkers.length;i++){
            showablemarkers[i].setVisible(true);
        }
        getlayers()[15].setMap(null)
    }
    else if(map.getZoom()>=12){
        clustericons[0][0].setVisible(false)
        for(var i=0;i<clustericons[1].length;i++){
            clustericons[1][i].setVisible(true);
        }
         for(var i=0;i<showablemarkers.length;i++){
            showablemarkers[i].setVisible(false);
        }
        getlayers()[15].setMap(null)
    }
    else if(map.getZoom()<12){
          clustericons[0][0].setVisible(true)
        for(var i=0;i<clustericons[1].length;i++){
            clustericons[1][i].setVisible(false)
        }
                getlayers()[15].setMap(map)

    }
        resetprev_filter();
    });
}