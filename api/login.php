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

      $pw=json_encode(md5($request->pwd));
      $pd=json_encode($request->pid);


     $sql="SELECT * from Utilizzatore WHERE PID=$pd && Password=$pw ";
     $stmt = $pdo->prepare( $sql );
     $stmt->execute();
  }
  catch(PDOException $e) {
    echo("[ERRORE] Connessione al DB non riuscita. Errore: ".$e->getMessage()."<br>");
    exit();
  }


$row = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($row);

//echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
//echo json_encode($row);

?>
