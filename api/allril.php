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
    //$pd=$request;
    $pd=$request->idpaz;
    $dt1=json_encode($request->dt1);
    $dt2=json_encode($request->dt2);

if($pd != 0){
    $sql="SELECT    r.ID,  r.ID_paz, r.data,  r.ID,  r.peso,  r.frequenza,  r.pressione,  r.passi,  r.nota,
  r.allarme_aut,   l.rpm,  l.watt,  l.flusso,  l.picco,  l.depressione,  l.PI,  l.allarme, v.data as datav, v.nota as notav, v.PID_u as PIDv
  FROM Rilevazione  as r LEFT JOIN Validazione as v ON v.dataR=r.data
  LEFT JOIN LVAD as l ON  l.ID_rilev=r.ID where (r.ID_paz=$pd) AND (r.data >= $dt1 AND r.data <= $dt2)";
    }
else {
$sql="SELECT    r.ID,  r.ID_paz, r.data,  r.ID,  r.peso,  r.frequenza,  r.pressione,  r.passi,  r.nota,
  r.allarme_aut,   l.rpm,  l.watt,  l.flusso,  l.picco,  l.depressione,  l.PI,  l.allarme, v.data as datav, v.nota as notav, v.PID_u as PIDv
  FROM Rilevazione  as r LEFT JOIN Validazione as v ON v.dataR=r.data
  LEFT JOIN LVAD as l ON  l.ID_rilev=r.ID where (r.data >= $dt1 AND r.data <= $dt2)";
}

     $stmt = $pdo->prepare( $sql );
     $stmt->execute();
    }
  catch(PDOException $e) {
    echo("[ERRORE] Select al DB non riuscita. Errore: ".$e->getMessage()."<br>");
    exit();
  }

  $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($row);
//  echo json_encode($pd);

  ?>
