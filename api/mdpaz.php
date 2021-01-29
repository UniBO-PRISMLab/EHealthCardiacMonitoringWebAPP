<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$id=json_encode($request->ID);
$ln=json_encode($request->luogo_nascita);
$dn=json_encode($request->data_nascita);
$nm=json_encode($request->nome);
$cnm=json_encode($request->cognome);
$rs=json_encode($request->residenza);
$ntl=json_encode($request->num_tel);
$ss=json_encode($request->sesso);
$cg=json_encode($request->class_gravita);
$tp=json_encode($request->tipologia);
$pm=json_encode($request->PID_medico);
$ps=$request->peso;
$al=$request->altezza;
$clN=$request->class_NYHA;
$clI=$request->class_INTERMACS;
$d=json_encode($request->data_nascita);


try {
    $pdo=new PDO('mysql:host=localhost;dbname=heart','user','heart99');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("set names utf8");
    /*$sql="UPDATE Paziente SET
     luogo_nascita=$ln, nome=$nm, cognome=$cnm, residenza=$rs,num_tel=$ntl, sesso=$ss,
     class_gravita=$cg, tipologia=$tp, PID_medico=$pm, peso=$ps, altezza=$al, class_NYHA=$clN,
     class_INTERMACS=$clI, data_nascita=STR_TO_DATE($d, '%d/%m/%Y')
     WHERE ID=$id  ";*/
     $sql="UPDATE Paziente SET
      luogo_nascita=$ln, nome=$nm, cognome=$cnm, residenza=$rs,num_tel=$ntl, sesso=$ss,
      class_gravita=$cg, tipologia=$tp, PID_medico=$pm, peso=$ps, altezza=$al, class_NYHA=$clN,
      class_INTERMACS=$clI, data_nascita=$d
      WHERE ID=$id  ";
    $stmt = $pdo->prepare( $sql );
    $stmt->execute();

  }
  catch(PDOException $e) {
    echo("[ERRORE] Inserimento DB non riuscito. Errore: ".$e->getMessage()."<br>");
    exit();
  }

?>
