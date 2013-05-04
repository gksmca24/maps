/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 var map;
 var info;
 var markerarr;
      function initialize() {
          var markerarray=[];
          markerarray=ajax();
           var mapOptions = {
          center: new google.maps.LatLng(28.4700, 77.0300),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
     panControl: true,
    panControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
    },
    streetViewControl: false,
     zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.TOP_LEFT
    }
        };
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
             var kmlUrl = 'http://qa.favista.in/app/webroot/files/GolfCourseRoad.kml';
        cta_layer = new google.maps.KmlLayer(kmlUrl);
        cta_layer.setMap(map);
        var mcOptions = {gridSize: 50, maxZoom: 15};
      // Create the markers you want to add and collect them into a array.
    alert(markerarr[0].toString());
    var mc = new MarkerClusterer(map, markerarr, mcOptions);
             google.maps.event.addListener(map,'click',function(event){
              if (info) {
        info.close();
    }
    cta_layer.setMap(null);
    

    alert(map.getCenter().toUrlValue().split(",")[1]);
             });  
             
      }
      function placemarker(location,id){
          markerarr=[];
          var marker = new google.maps.Marker({
           position:location,
           draggable:false,
           map:map,
           id:id
          });
          markerarr.push(marker);
         google.maps.event.addListener(marker, 'click', function() {
     if (info) {
        info.close();
    }
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    info=new google.maps.InfoWindow({
        content:marker.get("id"),
        size:new google.maps.Size(50,50)
    });
    info.open(map,marker);
  });
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
var markers;
function ajax(){
//    var markerarray=new array();
var mygetrequest=new ajaxRequest();
mygetrequest.open("GET", "http://localhost:8888/nbproject/db_link.php?sql=select * from fv_properties limit 100", true);
mygetrequest.send(null);
mygetrequest.onreadystatechange=function(){
 if (mygetrequest.readyState==4){
  if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
   var jsondata=JSON.parse(mygetrequest.responseText); //retrieve result as an JavaScript object
           markers=[]; 
   for (var i=0; i<jsondata.length; i++){
       var Latlng = new google.maps.LatLng(jsondata[i].lat,jsondata[i].lon);
      placemarker(Latlng,jsondata[i].unique_id);
   }
  }
  else{
   alert("An error has occured making the request");
  }
 }
 mygetrequest.close();
}
}
     google.maps.event.addDomListener(window, 'load', initialize);