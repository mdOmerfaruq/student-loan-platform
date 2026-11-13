<?php require 'db.php';
$result = $conn->query("SELECT * FROM campaigns");
$campaigns = [];
while ($row = $result->fetch_assoc()) { $campaigns[] = $row; }
echo json_encode($campaigns);