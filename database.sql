CREATE DATABASE IF NOT EXISTS student_loan_platform;
USE student_loan_platform;

CREATE TABLE IF NOT EXISTS loan_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  borrower_name VARCHAR(100),
  amount DECIMAL(10,2),
  request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS loan_offers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  request_id INT,
  lender_name VARCHAR(100),
  offer_amount DECIMAL(10,2),
  interest_rate DECIMAL(5,2),
  offer_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (request_id) REFERENCES loan_requests(id)
);

CREATE TABLE IF NOT EXISTS campaigns (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  goal DECIMAL(10,2),
  raised DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  campaign_id INT,
  donor_name VARCHAR(100),
  amount DECIMAL(10,2),
  donated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id)
);