<?php require 'db.php';
$data = json_decode(file_get_contents("php://input"), true);
$stmt = $conn->prepare("INSERT INTO loan_requests (borrower_name, amount) VALUES (?, ?)");
$stmt->bind_param("sd", $data['name'], $data['amount']);
echo json_encode(["success" => $stmt->execute(), "message" => "Loan request submitted."]);