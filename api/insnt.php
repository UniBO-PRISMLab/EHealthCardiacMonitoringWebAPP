<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

//$id=json_encode($request->ID);
$dr=json_encode($request->dataR);
$nt=json_encode($request->nota);
$pidu=json_encode($request->PID_u);
$idpr=$request->ID_pazR;


try {
    $pdo=new PDO('mysql:host=localhost;dbname=heart','user','heart99');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("set names utf8");
    $sql="INSERT INTO Validazione (dataR, ID_pazR, data, nota, PID_u)
    VALUES ($dr, $idpr, NOW(),$nt,$pidu)";
    $stmt = $pdo->prepare( $sql );
    $stmt->execute();
    $lastId = $pdo->lastInsertId();
  }
  catch(PDOException $e) {
    echo("[ERRORE] Inserimento DB non riuscito. Errore: ".$e->getMessage()."<br>");
    exit();
  }

?>
