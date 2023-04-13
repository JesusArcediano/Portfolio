<?php
date_default_timezone_set("Europe/Madrid");
$nombre = $_POST['nombre'];
$mail = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$cuerpo = "Este mensaje fue enviado por " . $nombre . ".\r\n\n";
$cuerpo .= "Su e-mail es: " . $mail . " \r\n\n";
$cuerpo .= "Mensaje: " . $_POST['mensaje'] . " \r\n\n";
$cuerpo .= "Enviado el " . date('d/m/Y h:i:s');

$para = 'j.arcedianoangulo@gmail.com';

mail($para, $asunto, utf8_decode($cuerpo), $header);
sleep(0.010);
header("Location:index.html");

?>


