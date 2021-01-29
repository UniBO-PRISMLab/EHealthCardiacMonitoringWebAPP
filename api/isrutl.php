<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$pw=json_encode(md5($request->Password));
$pd=json_encode($request->PID);
$nm=json_encode($request->nome);
$cnm=json_encode($request->cognome);
$eml=json_encode($request->Email);
$ntl=json_encode($request->num_tel);
$ct=json_encode($request->Categoria);

try {
    $pdo=new PDO('mysql:host=localhost;dbname=heart','user','heart99');
    $pdo->exec("set names utf8");
    $sql="INSERT INTO Utilizzatore (PID, Email, Password, nome, cognome,num_tel, Categoria) VALUES ($pd, $eml,$pw,$nm, $cnm, $ntl,$ct) ";
    $stmt = $pdo->prepare( $sql );
    $stmt->execute();

  }
  catch(PDOException $e) {
    echo("[ERRORE] Inserimento DB non riuscito. Errore: ".$e->getMessage()."<br>");
    exit();
  }

?>
