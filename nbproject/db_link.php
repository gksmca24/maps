<?php 
if($rows=apc_fetch('json')){
    echo $rows;
}else{
$con = mysql_connect('www.favista.com', 'readusr', 'iNs40tiDy');
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("favista", $con);
$sql="select fv_projects.id as show_id,fv_projects.available_for_rent as rent_prop,fv_projects.available_for_sale as sale_prop,fv_projects.unit_types as bhk,fv_projects.unit_min_price as pricemin,fv_projects.phase,fv_projects.unit_max_price as pricemax,fv_projects.name as proj_name,fv_property_classes.name,fv_property_classes.type,fv_property_classes.category,fv_projects.unique_id,fv_projects.lat,fv_projects.lon,fv_projects.cluster_id,(select image from fv_project_images where fv_project_images.project_id=fv_projects.id and is_deleted='0' limit 1) as image from fv_property_classes,fv_projects where fv_projects.property_class_id=fv_property_classes.id and fv_projects.is_deleted='0' and fv_projects.is_active='1' and fv_projects.city_id='1' and cluster_id<>'0'and fv_projects.cluster_id<>'7' union all select fv_properties.project_id as show_id,fv_properties.property_on as rent_prop,fv_properties.property_on as sale_prop,fv_properties.bedrooms as bhk,fv_properties.price as pricemin,fv_properties.title as phase,fv_properties.price as pricemax,fv_properties.title as proj_name,fv_property_classes.name,fv_property_classes.type,fv_property_classes.category,fv_properties.unique_id,fv_properties.lat,fv_properties.lon,fv_properties.cluster_id,(select image from fv_property_images where fv_property_images.property_id=fv_properties.id and is_deleted='0' limit 1) as image from fv_property_classes,fv_properties where fv_properties.property_class_id=fv_property_classes.id and fv_properties.is_deleted='0' and fv_properties.city_id='1' and cluster_id<>'0'and fv_properties.cluster_id<>'7' and project_id='0' and is_blocked<>'1' and lat<>\"null\" and lon<>\"null\"";
$result = mysql_query($sql);
$rows=array();
while($row = mysql_fetch_assoc($result)){
	$rows[]=$row;
}
mysql_close($con);
apc_add('json',json_encode($rows),3600);
echo json_encode($rows);
}
?>
