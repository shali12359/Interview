<?php
   include("Connection/Connection.php");

  if (isset($_POST['signup-btn'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];

    $sql = "INSERT INTO users(name, email, password, gender) VALUES('$name','$email','$password','$gender')";

    if (mysqli_query($con, $sql)) {
      echo "<script>if(!alert('Successfully Signed up...')) {
            location.href='Signin.php'
      }</script>";
    }

    else {
      echo "<script>if(!alert('Error in Signing up...')) {
            location.href='Signup.php'
      }</script>";
    }
  }
 ?>
