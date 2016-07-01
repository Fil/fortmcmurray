<?php

header('Content-Type: application/javascript; charset=utf-8');

$ip = $_SERVER['REMOTE_ADDR'];
$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
if ($details->loc) $loc = $details->loc;
else $loc = "48.8534100, 2.3488000";

echo "paris = [ $loc ];";

