<?php

// Set the database server credentials
$db_server = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'store_x';

// Connect to the database server
$conn = mysqli_connect($db_server, $db_username, $db_password, $db_name);

// Check if the connection was successful
if (!$conn) {
    // If the connection was not successful, terminate the script and return an error message
    http_response_code(500);
    die("Error connecting to the database: " . mysqli_connect_error());
}
