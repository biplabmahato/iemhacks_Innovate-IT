<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="login.css">
  </head>
  <body>
  <header>
        <nav>
            <div class="navbar">
                <a href="index.html"><img src="Agro.png" alt="logo"></a>
                <ul>
                    <li class="menu">Menu&#x2304;
                        <div class="drpbtn">
                            <a href="Risk.html">Risk Calculator</a>
                            <a href="crops_data.html">Crop Database</a>
                            <a href="insurance.html">Get Insurance</a>
                            <a href="deals.html">Get Best Deals</a>
                            <a href="Query.html">Ask Query</a>
                        </div>
                    </li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><input type="text" placeholder="&#128269; Serach "></li>
                </ul>
            </div>
        </nav>
    </header>
  <div id="form">
            <h1 id="heading">SignUp Form</h1><br>
            <form name="form" action="login.php" method="POST">
                <i class="fa fa-user fa-lg"></i>
                <input type="text" id="user" name="username" placeholder="Enter Username" required></br></br>
                <i class="fa-solid fa-envelope fa-lg"></i>
                <input type="email" id="email" name="email" placeholder="Enter Email" required></br></br>
                <i class="fa-solid fa-lock fa-lg"></i>
                <input type="password" id="pass" name="password" placeholder="Create Password" required></br></br>
                <i class="fa-solid fa-lock fa-lg"></i>
                <input type="password" id="cpass" name="cpass" placeholder="Retype Password" required></br></br>
                <input type="submit" id="btn" value="SignUp" name = "submit" onclick="redirect();changeicon()"/>
            </form>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
   <!--INSERT INTO `signup` (`id`, `username`, `email`, `password`) VALUES ('1', 'test name', 'this@this.com', '#thisis');-->
    <script src="login.js"></script>
  
    </body>
  </html>
  <?php 
    $servername = "localhost:3306";
    $username = "id21190681_agrocultuser";
    $password = "Satirtha@2004";

     
    $con = mysqli_connect($servername, $username, $password,);
    if(!$con){
        die("Connection failed".mysqli_connect_error());
    }
    //echo "success";
    $username= $_POST['username'];
    $email= $_POST['email'];
    $password= $_POST['password'];
    $sql="INSERT INTO `id21190681_agrocult`.`db`( `username`, `email`, `password`) VALUES ( '$username', '$email', '$password');";
     if($con->query($sql)==true){
        echo "succesfully inserted";
     }
     else{
        echo "ERROR: $sql <br> $con->error";
     }
     $con->close();
   ?>