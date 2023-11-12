<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mostruari</title>
</head>
<body>
<p>Nom: <?= $_POST["nom"] ?></p>
<p>eMail: <?= $_POST["mail"] ?></p>
<p>Qualitats personals: <?php foreach ($_POST["qualitats"] as $val) {
        echo "$val ";
    } ?></p>
<p>etc, etc,</p>
</body>
</html>