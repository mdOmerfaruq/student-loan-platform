<?php require 'db.php';
$data = json_decode(file_get_contents("php://input"), true);
$stmt = $conn->prepare("INSERT INTO loan_offers (request_id, lender_name, offer_amount, interest_rate) VALUES (?, ?, ?, ?)");
$stmt->bind_param("isdd", $data['requestId'], $data['lenderName'], $data['offerAmount'], $data['interestRate']);
echo json_encode(["success" => $stmt->execute(), "message" => "Loan offer submitted."]);