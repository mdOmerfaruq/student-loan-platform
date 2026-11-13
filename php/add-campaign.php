<?php require 'db.php';
$data = json_decode(file_get_contents("php://input"), true);
$stmt = $conn->prepare("INSERT INTO campaigns (title, description, goal) VALUES (?, ?, ?)");
$stmt->bind_param("ssd", $data['title'], $data['description'], $data['goal']);
echo json_encode(["success" => $stmt->execute()]);