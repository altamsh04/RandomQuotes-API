<?php
$quotes = array(
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "The best way to predict the future is to invent it.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does."
);

$random = rand(0, count($quotes) - 1);

// Set the header to return JSON data
header('Content-Type: application/json');

// Create an associative array with the key 'quote'
$response = array("quote" => $quotes[$random]);

// Output the response in JSON format
echo json_encode($response);
?>
