<?php
header('Content-Type: text/xml');

$disponible = (rand(0, 1) == 1) ? "true" : "false";

echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<respuesta>';
echo '<disponible>' . $disponible . '</disponible>';
echo '</respuesta>';
?>
