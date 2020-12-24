<?php
  session_start();

  include("Connection/Connection.php");

  if (isset($_POST['signin-btn'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $select_user = "SELECT * FROM users WHERE email='$email' AND password='$password'";

    $sql = mysqli_query($con, $select_user);
    $check = mysqli_num_rows($sql);

    if ($check == 1) {
      $_SESSION['email'] = $email;


      echo "<script>if(!alert('Signed in Successfully...')) {
            location.href='Home.php'
      }</script>";

    }

    else {
      echo "<script>if(!alert('Error in Signing in..!')) {
            location.href='Signin.php'
      }</script>";
    }
  }
 ?>
