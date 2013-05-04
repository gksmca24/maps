<?php $con = mysql_connect('www.favista.com', 'readusr', 'iNs40tiDy');
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("favista", $con);
if(strstr($_GET["id"],'PJ')){
$sql="select image from fv_project_images where project_id='".substr($_GET['id'],2)."'";
}
else{
    $sql="select image from fv_property_images where property_id='".substr($_GET['id'],2)."'";
}
$result = mysql_query($sql);
$rows=array();
while($row = mysql_fetch_assoc($result)){
	$rows[]=$row;
}
echo json_encode($rows);
mysql_close($con);
?>