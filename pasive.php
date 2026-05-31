<?php 
if(!$_POST) {
  header('Location: index.php');
  exit;
}
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING) ; 
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL ) ;
  $year = filter_var($_POST['year'], FILTER_SANITIZE_STRING ) ;
  $sex = filter_var($_POST['sex'], FILTER_SANITIZE_STRING) ;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Registration Success</title>
</head>

<body>
    <main>
        <h1>Confirm your information</h1>
        <div class="container">
            <p>Name: <span><?php echo htmlspecialchars($name) ?></span></p>
            <p>Email: <span><?php echo htmlspecialchars($email) ?></span></p>
            <p>Year of Birth: <span><?php echo htmlspecialchars($year) ?></span></p>
            <p>Gender: <span style="text-transform: capitalize;"><?php echo htmlspecialchars($sex) ?></span></p>
            
            <div class="radio-container">
                <button class="right" onclick="window.location.href='index.php'">Correct</button>
                <button class="bad" onclick="window.history.back()">Incorrect</button>
            </div>
        </div>
    </main>
</body>
</html>
