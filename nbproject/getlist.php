<?php $con = mysql_connect('www.favista.com', 'readusr', 'iNs40tiDy');
$id = explode(",", $_GET["id"]);
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
  $sql="";
  for($i=0;$i<sizeof($id);$i++){
      if($i!=0)
      $sql=$sql." or unique_id='".$id[$i]."' ";
      else
      $sql=$sql." and unique_id='".$id[$i]."' ";
  }
mysql_select_db("favista", $con);    
$sql="select available_for_rent as rent_num,available_for_sale as sale_num,unit_min_price as pricemin,unit_max_price as pricemax,name,unique_id,(select image from fv_project_images where fv_project_images.project_id=fv_projects.id limit 1) as image from fv_projects where is_deleted='0' and is_active='1' and lat<>\"null\" and lon<>\"null\" union select property_on as rent_num,property_on as sale_num,price as pricemin,price as pricemax,title as name,unique_id,(select image from fv_property_images where fv_property_images.property_id=fv_properties.id limit 1) as image from fv_properties where is_deleted='0' and is_blocked<>'1' and lat<>\"null\" and lon<>\"null\" and (fv_properties.project_id=0 or fv_properties.project_id=-1)";
$result = mysql_query($sql);
$rows=array();
while($row = mysql_fetch_assoc($result)){
	$rows[]=$row;
}
echo json_encode($rows);
mysql_close($con);
?>
