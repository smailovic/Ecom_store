<?php

// Connect to the database
include_once '../../imports/db_connect.php';

// Set the content type to JSON
header('Content-Type: application/json');

// Initialize an array to store the response
$response = array();

// Set the HTTP response code
http_response_code(200);

// Execute a SELECT query to retrieve the products
$result = mysqli_query($conn, "SELECT * FROM order_items");

// Check if the query was successful
if ($result) {
    // If the query was successful, retrieve the products
    $response['orders'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
} else {
    // If the query was unsuccessful, set the response code to 500 (Internal Server Error)
    http_response_code(500);
    $response['error'] = "Error retrieving orders from the database.";
}

// Close the database connection
mysqli_close($conn);

// Return the response as JSON
echo json_encode($response);
