<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$request->data=date(DATE_RFC2822);

$st=json_encode($request);

$log_filename = $_SERVER['DOCUMENT_ROOT']."/logfile";

if (!file_exists($log_filename))
{
    // create directory/folder uploads.
    mkdir($log_filename, 0777, true);
}
$log_file_data = $log_filename.'/log_'. date('d-M-Y').'.log';
// if you don't add `FILE_APPEND`, the file will be erased each time you add a log
file_put_contents($log_file_data, $st. "\n"."-----"."\n", FILE_APPEND);
?>
