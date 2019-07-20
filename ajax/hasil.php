<?php 
require '../fungsi.php';
$teks = $_GET['teks'];
$key  = empty($_GET['key']) ? 0 : $_GET['key'];
$cipherText = Encipher(str_replace(" ", "_", $teks), $key);
$plainText  = Decipher(str_replace("_", " ", $cipherText), $key);
?>
<br>
<p>Cipher Text: <span class="hasil"><?= $cipherText ?></span></p>
<p>Plain Text: <?= $plainText ?></p>
