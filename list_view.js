/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var setid;
var displaymarker;
function getlist(ids){
    $("#leftsidebar").animate({"left" : "0px"}, "slow");
				 $('.searchwhide').hide("fast");
//            $('#poplegend').fadeIn('slow');
//        document.getElementById("loader").innerHTML="<img src='preview.gif'>";
    
//displaymarker=true;
//var list="";
//for(var i=0;i<ids.length;i++){
//    if(i==0)
//    list=list+ids[i]
//    else
//    list=list+","+ids[i] 
//}
//if(ajaxlist(list)){
//    if(getmarkertoselect()){
//        clickmarkertoselect();
//    }
//}
}
var list="";
function ajaxlist(unique_id,rent_num,sale_num,image,zindex_num,name,pricemin,pricemax){
              var proj=unique_id.substr(0,2);
                  var price=getpriceunitlist(pricemin,pricemax);
              if(proj==='PJ'){
                   var x = new Image();
x.src ="http://prop.favistat.com/img/project_images/thumbnails/"+image;
	   if(rent_num=="0"&&sale_num!="0"){
                  list=list+"<div id='"+unique_id+"' onmouseover='itemmouseover(\""+unique_id+"\");' onmouseout='itemmouseout(\""+unique_id+"\");' onclick='infoopen(\""+unique_id+"\");' class=\"propdls\" style=\"z-index:"+((zindex_num)*100)+";\"><img src="+x.src+" onerror='this.src=\"images/error.jpg\"' class='logoimg'/><p>"+name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div class=\"sale\">Sale: "+sale_num+"</div><div id='"+unique_id+"content' onclick='listclick(event)' style=\"display:none;\"></div></div>";
           }else if(rent_num!="0"&&sale_num=="0"){
               	  list=list+"<div id='"+unique_id+"' onmouseover='itemmouseover(\""+unique_id+"\");' onmouseout='itemmouseout(\""+unique_id+"\");' onclick='infoopen(\""+unique_id+"\");' class=\"propdls\" style=\"z-index:"+((zindex_num)*100)+";\"><img src="+x.src+" onerror='this.src=\"images/error.jpg\"'  class='logoimg'/><p>"+name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div class=\"rent\">Rent: "+rent_num+"</div><div id='"+unique_id+"content' onclick='listclick(event)' style=\"display:none;\"></div></div>";
           }else if(rent_num=="0"&&sale_num=="0"){
               list=list+"<div id='"+unique_id+"' onmouseover='itemmouseover(\""+unique_id+"\");' onmouseout='itemmouseout(\""+unique_id+"\");' onclick='infoopen(\""+unique_id+"\");' class=\"propdls\" style=\"z-index:"+((zindex_num)*100)+";\"><img src="+x.src+" onerror='this.src=\"images/error.jpg\"'  class='logoimg'/><p>"+name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div id='"+unique_id+"content' onclick='listclick(event)' style=\"display:none;\"></div></div>";
           }else{
        	  list=list+"<div id='"+unique_id+"' onmouseover='itemmouseover(\""+unique_id+"\");' onmouseout='itemmouseout(\""+unique_id+"\");' onclick='infoopen(\""+unique_id+"\");' class=\"propdls\" style=\"z-index:"+((zindex_num)*100)+";\"><img src="+x.src+" onerror='this.src=\"images/error.jpg\"'  class='logoimg'/><p>"+name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" - "+price[1]+" "+price[2]+"</span></p><div class=\"sale\">Sale: "+sale_num+" <span style=\"color:#076ae5;\"> Rent: "+rent_num+"</span></div><div id='"+unique_id+"content' onclick='listclick(event)' style=\"display:none;\"></div></div>";   
           }
       }else{
                    var x = new Image();
x.src ="http://prop.favistat.com/img/property_images/thumbnails/"+image;
           list=list+"<div id='"+unique_id+"' onmouseover='itemmouseover(\""+unique_id+"\");' onmouseout='itemmouseout(\""+unique_id+"\");' onclick='infoopen(\""+unique_id+"\");' class=\"propdls\" style=\"z-index:"+((zindex_num)*100)+";\"><img src="+x.src+" onerror='this.src=\"images/error.jpg\"'  width=\"42\" height=\"42\" /><p>"+name+"<br /><span><span class=\"WebRupee\">"+price[3]+"</span>"+price[0]+" "+price[2]+"</span></p><div id='"+unique_id+"content' onclick='listclick(event)' style=\"display:none;\"></div></div>";
       }
//       resetprev_filter();
}
function listclick(event){if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;}

