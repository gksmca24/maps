var map;
var service;
var infowindow;
var draw_circle;  // object of google maps polygon for redrawing the circle
var nearbymarker=[];
var markerimg;
function nearby(id,type) {
//    hideallmarkers();
    if(!service)
    service= new google.maps.places.PlacesService(map);
//    if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;
   $("#nearby").show();
   map=getmap();
  var markerpos = getmarkerfullarray()[id].get("position");
 if (draw_circle != null) {
        draw_circle.setMap(null);
    }
    draw_circle = new google.maps.Circle({
        center: markerpos,
        radius: 2500,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FFF",
        fillOpacity: 0.35,
        map: map
    });
    markerimg="Icon/"+type+".png";
//    map.fitBounds(draw_circle.getBounds());
    var request = {
    location: markerpos,
    radius: '2000',
    types: [type]
  };
  var results=service.nearbySearch(request,callback);
}

function callback(results, status) {
    if(nearbymarker){
           for(var i=0;i<nearbymarker.length;i++){
               nearbymarker[i].setMap(null);
           }
       }
       if(status==google.maps.places.PlacesServiceStatus.ZERO_RESULTS){
                                     draw_circle.setOptions({fillColor:"#ff0000"});
       }
  if (status == google.maps.places.PlacesServiceStatus.OK) {
       $('.listing-by-map').hide();
        $('#map div').last().addClass('listing-by-map');
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
   function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
        icon:markerimg,
        map: map,
        position: place.geometry.location
        });
        nearbymarker.push(marker);
        }
function clearnearby(){
//    showallmarkers();
    if(nearbymarker){
    for(var i=0;i<nearbymarker.length;i++){
               nearbymarker[i].setMap(null);
           }
    }
    if(draw_circle)
           draw_circle.setMap(null);
}

