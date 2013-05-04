<?php $con = mysql_connect('www.favista.com', 'readusr', 'iNs40tiDy');
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("favista", $con);
if(strstr($_GET["id"],'PJ')){
$sql="select unit_min_price as pricemin,unit_max_price as pricemax,unique_id,description,canonical_url,name,available_for_sale as sale_prop,available_for_rent as rent_prop from fv_projects where unique_id='".$_GET['id']."'";
}
else{
    $sql="select price,unique_id,bedrooms,bathrooms,drawing_rooms,dining_rooms,kitchens,servant_rooms,balconies,furnishing,property_ownership,description,canonical_url,title as name,super_area,property_on from fv_properties where unique_id='".$_GET['id']."'";
}
$result = mysql_query($sql);
$rows=array();
while($row = mysql_fetch_assoc($result)){
	$rows[]=$row;
}
echo json_encode($rows);
mysql_close($con);
?>