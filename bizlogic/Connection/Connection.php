<?php
  $con = mysqli_connect("localhost", "root", "", "myphpdb");

  if (mysqli_connect_errno()) {
    echo "Faild..! ".mysqli_connect_err()."<br>";
  }

  // else {
  //   echo "Connected";
  // }
 ?>
