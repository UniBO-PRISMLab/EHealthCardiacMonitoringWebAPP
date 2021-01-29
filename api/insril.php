<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$pd=json_encode($request->id);

$pd1=$request->id;
$peso = $request->peso;
$frequenza= $request->frequenza;
$pressione= json_encode($request->pressione);
$passi= $request->passi;
$nota= json_encode($request->nota);
//$allarme_aut= json_encode($request->allarme_aut);
$rpm= $request->rpm;
$watt= $request->watt;
$flusso= $request->flusso;
$picco= $request->picco;
$depressione= $request->depressione;
$pi= $request->pi;
$allarme= json_encode($request->alrm);
$nome= json_encode($request->nome);
$cognome= json_encode($request->cognome);


try {
    $pdo=new PDO('mysql:host=localhost;dbname=heart','user','heart99');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("set names utf8");

    $sql="SELECT  nome, cognome FROM Paziente WHERE ID=$pd";
    $stmt = $pdo->prepare( $sql );
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if(json_encode($row["nome"]) == strtoupper($nome) && json_encode($row["cognome"]) == strtoupper($cognome)){

    //$sql="CALL InsRil(1,61,56,'alta',120,'','',4,5.0,1,1.1,1.2,1.3,'Watt alti')";

   $sql="CALL InsRil($pd,$peso,$frequenza,$pressione,$passi,$nota,'',$rpm,$watt,$flusso,$picco,$depressione,$pi,$allarme)";
    $stmt1 = $pdo->prepare( $sql );
    $stmt1->execute();
    //$result=$pdo->exec($sql);
}
else  {
  echo json_encode('ID/nome/cognome errato');
      exit();
}
  }
  catch(PDOException $e) {
    echo("[ERRORE] Select al DB non riuscita. Errore: ".$e->getMessage()."<br>");
    exit();
  }

echo json_encode($row["nome"]);


?>
