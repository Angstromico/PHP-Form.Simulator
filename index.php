<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='css/style.css'>
    <title>Registration Form Simulator</title>
</head>
<body>
    <main>
        <h1>Registration Form</h1>
        <form action='pasive.php' method='POST' id='form' class='form'>
            <legend>Personal Data Registration</legend>
            <div class='input-group'>
                <label for='name'>Name</label>
                <input type='text' id='name' placeholder='Your Name' name='name' required data-input='1'>
                <p class='invalid' data-invalid='1'>Fill the field before proceeding</p>
            </div>
            <div class='input-group'>
                <label for='email'>Your Email</label>
                <input type='email' name='email' id='email' placeholder='name@example.com' required data-input='2'>
                <p class='invalid' data-invalid='2'>Please enter a valid email address</p>
            </div>
            <h2>Choose your gender</h2>
            <div class='radio-container'>
                <div class='flex-container'>
                    <input type='radio' name='sex' id='man' value='man' required>
                    <label for='man'>Masculine</label>
                </div>
                <div class='flex-container'>
                    <input type='radio' name='sex' id='woman' value='woman' required>
                    <label for='woman'>Feminine</label>
                </div>
            </div>
            <div class='input-group'>
                <label for='year'>Year of Birth</label>
                <select name='year' id='year' required data-input='3'>
                    <option selected disabled value=''>Choose The Year</option>
                    <?php for($i = date('Y'); $i >= 1940; $i--) { ?>
                    <option value='<?php echo $i ?>'><?php echo $i ?></option>
                    <?php } ?>
                </select>
                <p class='invalid' data-invalid='3'>Please select your year of birth</p>
            </div>
            <div class='flex-container terms-container'>
                <input type='checkbox' name='checkbox' id='terms' value='ok' required>
                <label for='terms'>I accept the terms and conditions</label>
            </div>
            <div class='center'></div>
            <button type='button' id='button' disabled>Send Registration</button>
            <input type='submit' value='Send' id='submit'>
        </form>
    </main>
    <script src='js/app.js'></script>
</body>
</html>