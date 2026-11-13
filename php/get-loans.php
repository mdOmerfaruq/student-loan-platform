<?php require 'db.php';
$result = $conn->query("SELECT * FROM loan_requests");
$loans = [];
while ($row = $result->fetch_assoc()) { $loans[] = $row; }
echo json_encode($loans);