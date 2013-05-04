function addoverlay(map,location,count,visible) {
    console.log(count+""+location);
  var marker = new RichMarker({
          position: location,
          map: map,
          draggable: true,
          flat:true,
          visible:visible,
          Draggable:false,
          content: '<div style="background:#3d8516; color: #ffffff !important; font-family: Arial,sans-serif !important; font-size: 16px !important; text-align: center; text-decoration: none; text-shadow:0px 1px 0px #333; border:3px solid #c8f5b0; border-radius:500px; box-shadow:0px 0px 10px #333; width:36px !important; height:36px !important; line-height:36px !important; zoom:1; opacity:0.9;">'+count+'</div>'
          });
//        google.maps.event.addListener(marker, 'click', function() {
////                      alert("clicked");
//                  });

return marker;
}