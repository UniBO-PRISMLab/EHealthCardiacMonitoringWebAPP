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
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("set names utf8");
    if ($request->Password!='')
    $sql="UPDATE Utilizzatore SET Password=$pw, Email=$eml, nome=$nm, cognome=$cnm,num_tel=$ntl,Categoria=$ct WHERE PID=$pd  ";
    if ($request->Password==='')
    $sql="UPDATE Utilizzatore SET Email=$eml, nome=$nm, cognome=$cnm,num_tel=$ntl,Categoria=$ct WHERE PID=$pd  ";
    $stmt = $pdo->prepare( $sql );
    $stmt->execute();

  }
  catch(PDOException $e) {
    echo("[ERRORE] Inserimento DB non riuscito. Errore: ".$e->getMessage()."<br>");
    exit();
  }

?>
