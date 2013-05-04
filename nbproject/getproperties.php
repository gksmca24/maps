<?php $con = mysql_connect('www.favista.com', 'readusr', 'iNs40tiDy');
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("favista", $con);
$sql="select unique_id,property_on,bedrooms,price,super_area,(select price_unit from fv_property_classes where id=fv_properties.property_class_id) as unit_type from fv_properties where project_id='".$_GET["id"]."' order by price asc";
$result = mysql_query($sql);
$rows=array();
while($row = mysql_fetch_assoc($result)){
	$rows[]=$row;
}
echo json_encode($rows);
mysql_close($con);
?>