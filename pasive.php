<?php 
if(!$_POST) {
  header('Location: index.php');
}
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING) ; 
  $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING ) ;
  $year = filter_var($_POST['year'], FILTER_SANITIZE_STRING ) ;
  $sex = filter_var($_POST['sex'], FILTER_SANITIZE_STRING) ;;
   
 
  ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Respond</title>
</head>

<body>
    <main>
        <h1>Check if your information is Correct</h1>
        <div class="container <?php echo $sex ?>">
            <p>Name: <span id="name"><?php echo $name ?></span></p>
            <p>Email: <span id="email"><?php echo $email ?></span></p>
            <p>Year of Birth: <span id="year"><?php echo $year ?></span></p>
            <p>Gender: <span id="sex"><?php echo $sex ?></span></p>
            <div class="radio-container">
                <div class="flex-container">
                    <button class="right">Correct</button>
                </div>
                <div class="flex-container">
                    <button class="bad">Incorrect</button>
                </div>
            </div>
            <form id="form2" class="non-existens">
                <legend>Chose the Field You Wanna Fix</legend>

                <label for="name">Modify Your Name</label>
                <input type="text" name="name" id="newName" class="opacity-zero">
                <label for="email">Modify Your Email</label>
                <input type="email" name="email" id="newEmail" class="opacity-zero">
                <p class="invalid opacity-zero">Put a Valid Email</p>
                <label for="sex">Change your Gender</label>
                <select name="sex" id="newSex" class="opacity-zero">
                    <option selected disabled>Pick Your Real Gender</option>
                    <option>Woman</option>
                    <option>Man</option>
                </select>
                <label for="birth">Your Real Birth Year</label>
                <select name="birth" id="select" class="opacity-zero">
                    <option selected disabled>Chose your Real Year of Birth</option>
                    <?php
                        for($i = 2021; $i >= 1940; $i-- ) {
                        ?>
                    <option value="<?php echo $i ?>"><?php echo $i ?></option>
                    <?php } ?>
                </select>

                <button type="submit" class="submit-button">Fix Bad Data</button>
            </form>
        </div>
    </main>
</body>
<script src="js/other.js"></script>

</html>