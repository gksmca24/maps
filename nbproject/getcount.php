<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
if($rows=apc_fetch('count')){
    echo $rows;
}else{
$con = mysql_connect('www.favista.com', 'readusr', 'iNs40tiDy');
if (!$con){
  die('Could not connect: ' . mysql_error());
  }
  $rows= array();
mysql_select_db("favista", $con);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1'";
$result = mysql_query($sql);
$rows[0] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='1'";
$result = mysql_query($sql);
$rows[1] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='2'";
$result = mysql_query($sql);
$rows[2] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='3'";
$result = mysql_query($sql);
$rows[3] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='4'";
$result = mysql_query($sql);
$rows[4] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='5'";
$result = mysql_query($sql);
$rows[5] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='6'";
$result = mysql_query($sql);
$rows[6] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='8'";
$result = mysql_query($sql);
$rows[7] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='9'";
$result = mysql_query($sql);
$rows[8] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='10'";
$result = mysql_query($sql);
$rows[9] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='11'";
$result = mysql_query($sql);
$rows[10] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='12'";
$result = mysql_query($sql);
$rows[11] = mysql_fetch_assoc($result);
$sql="select count(*) as count from fv_properties where is_blocked='0' and city_id='1' and cluster_id='13'";
$result = mysql_query($sql);
$rows[12] = mysql_fetch_assoc($result);
mysql_close($con);
apc_add('count',json_encode($rows),3600);
echo json_encode($rows);
}
?>
