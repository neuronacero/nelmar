<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "mtoprrasca@controlweb.com.ar";
    $asunto = "Nuevo mensaje de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Cabeceras del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        // Éxito al enviar el correo electrónico
        header("Location: gracias.html");
        exit();
    } else {
        // Error al enviar el correo electrónico
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>
