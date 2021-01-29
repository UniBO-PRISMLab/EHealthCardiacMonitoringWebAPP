<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

try {
    $pdo=new PDO('mysql:host=localhost;dbname=heart','user','heart99');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("set names utf8");

     $sql="SELECT * from Utilizzatore WHERE Categoria='Medico'";
     $stmt = $pdo->prepare( $sql );
     $stmt->execute();
  }
  catch(PDOException $e) {
    echo("[ERRORE] Connessione al DB non riuscita. Errore: ".$e->getMessage()."<br>");
    exit();
  }


$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($row);

//echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
//echo json_encode($row);

?>
