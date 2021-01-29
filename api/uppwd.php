<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

try {
    $pdo=new PDO('mysql:host=localhost;dbname=heart','user','heart99');
    $pdo->exec("set names utf8");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $pw=json_encode(md5($request->password));
      $pd=json_encode($request->PID);
     $sql="UPDATE Utilizzatore SET Password=$pw WHERE PID=$pd";
     $stmt = $pdo->prepare($sql);
     $stmt->execute();
  }
  catch(PDOException $e) {
    echo("[ERRORE] Connessione al DB non riuscita. Errore: ".$e->getMessage()."<br>");
    exit();
  }
?>
