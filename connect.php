<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $gmail = $_POST['gmail'];
    $phone = $_POST['phone'];
    $suggestion = $_POST['suggestion'];
    echo "hello";

    // Database connection
    $con = new mysqli('localhost', 'root', '', 'feedback');
    if ($con->connect_error) {
        die('Connection failed: ' . $con->connect_error);
    } else {
        $stmt = $con->prepare("INSERT INTO feedback (gmail, phone, suggestion) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $gmail, $phone, $suggestion);
        $stmt->execute();
        echo "Form submitted successfully";
        $stmt->close();
        $con->close();
    }
}
?>