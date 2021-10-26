<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Form Sending PHP Simulator" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />
    <meta property="og:description" content="A PHP Form that use the method POST" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="828" />
    <meta property="og:image:height" content="450" />
    <meta property="og:site_name" content="PHP-Form-Manuel" />
    <meta property="fb:app_id" content="928977633900253" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="" />
    <link rel="stylesheet" href="css/style.css">
    <title>Manuel First PHP Forms</title>
</head>

<body>
    <main>
        <h1>Registration Form</h1>
        <form action="pasive.php" method="POST" id="form" class="form">
            <legend>Personal Data Registration</legend>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" name="name" require data-input="1">
            <p class="invalid" data-invalid="1">Fill The Field Before Proceeding</p>
            <label for="email">Your Email</label>
            <input type="email" name="email" id="email" placeholder="Your Mail" require data-input="2">
            <p class="invalid" data-invalid="2">Fill The Field Properly Before Proceeding</p>
            <h2>Chose your gender</h2>

            <div class="radio-container">
                <div class="flex-container">
                    <label for="sex" class="masculine">Masculine</label>
                    <input type="radio" name="sex" id="man" value="man" require>
                </div>
                <div class="flex-container">
                    <label for="sex" class="femenine">Femenine</label>
                    <input type="radio" name="sex" id="woman" value="woman" require>
                </div>
            </div>

            <label for="year"> Put your Year of Bird Here</label>
            <select name="year" id="year" require data-input="3">
                <option selected disabled>Chose The Year</option>
                <?php 
                for($i = 2021; $i >= 1940; $i--  ) { 
                    ?>
                <option value="<?php echo $i ?>"><?php echo $i ?></option>
                <?php }
            ?>
            </select>

            <label for="terms">Do you accept our terms and conditions?</label>
            <input type="checkbox" name="checkbox" id="terms" value="ok" require>
            <div class="center"></div>
            <button type="button" id="button">Send</button>
            <input type="submit" value="Send" id="submit">
        </form>
    </main>
    <script src="js/app.js"></script>
</body>

</html>