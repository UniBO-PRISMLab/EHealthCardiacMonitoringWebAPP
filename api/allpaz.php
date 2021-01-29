<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

try {
    $pdo=new PDO('mysql:host=localhost;dbname=heart','user','heart99');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("set names utf8");
    $pd=json_encode($request);
    //$pd=json_encode($request->id);
    $sql="SELECT * FROM Paziente";
     $stmt = $pdo->prepare( $sql );
     $stmt->execute();
    }
  catch(PDOException $e) {
    echo("[ERRORE] Select al DB non riuscita. Errore: ".$e->getMessage()."<br>");
    exit();
  }


$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($row);

?>
