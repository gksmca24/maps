<?php 
if(strstr($_GET["id"],'PJ')){
$con = mysql_connect('www.favista.com', 'readusr', 'iNs40tiDy');
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("favista", $con);
$sql="select walkthrough_url from fv_project_units where project_id='".substr($_GET['id'],2)."' limit 1";
$result = mysql_query($sql);
$rows=array();
while($row = mysql_fetch_assoc($result)){
	$rows[]=$row;
}
echo json_encode($rows);
mysql_close($con);
}else{
    echo "[]";
}
?>