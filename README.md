# 🎓 Student Loan & Crowdfunding Platform

A web-based **Student Loan & Crowdfunding Platform** designed to help students explore loan opportunities, submit loan requests, receive loan offers, and support fundraising campaigns through donations.

The platform aims to provide a centralized environment where students and potential lenders can connect and where individuals can contribute to student-focused crowdfunding campaigns.

## 🚀 Project Overview

The system focuses on two major services:

- **Student Loan Management:** Students can explore loan opportunities, submit loan requests, and view available loan offers.
- **Crowdfunding:** Users can explore fundraising campaigns and contribute donations to support different causes.

## ✨ Key Features

### 💰 Student Loan Management
- View available loan opportunities
- Submit loan requests
- Display loan request information
- View loan offers
- Review offered loan amounts and interest rates

### ❤️ Crowdfunding
- Explore crowdfunding campaigns
- View campaign details
- Display fundraising goals
- Track raised amounts
- Support campaigns through donations

### 👤 User Management
- User registration
- User login
- Account access interface

### 🌐 Website Interface
- Home page
- Loan listing page
- Loan request page
- Loan offers page
- Crowdfunding page
- Login page
- Signup page
- Contact section

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and layout |
| JavaScript | Frontend interactions |
| PHP | Backend development |
| MySQL | Database management |
| XAMPP | Local development environment |
| phpMyAdmin | Database administration |

## 📁 Project Structure

```text
student-loan-platform/
│
├── js/
│
├── php/
│
├── crowdfunding.html
├── database.sql
├── index.html
├── loan-offers.html
├── loan-request.html
├── loan_view.html
├── login.html
├── signup.html
├── styles.css
│
└── README.md
```

## 🗄️ Database Structure

The project includes a MySQL database named `student_loan_platform`.

The current SQL schema defines four main tables:

### 1. loan_requests
Stores student loan request information.

- id
- borrower_name
- amount
- request_date

### 2. loan_offers
Stores loan offers made against loan requests.

- id
- request_id
- lender_name
- offer_amount
- interest_rate
- offer_date

### 3. campaigns
Stores crowdfunding campaign information.

- id
- title
- description
- goal
- raised
- created_at

### 4. donations
Stores donation records associated with crowdfunding campaigns.

- id
- campaign_id
- donor_name
- amount
- donated_at

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Install XAMPP

Download XAMPP:

https://www.apachefriends.org/

Start Apache and MySQL from the XAMPP Control Panel.

### 2. Clone the Repository

Open your terminal and execute:

```bash
git clone https://github.com/mdOmerfaruq/student-loan-platform.git
```

### 3. Move the Project

Place the downloaded project folder inside:

```text
C:\xampp\htdocs\
```

### 4. Create the Database

1. Open your browser.
2. Visit http://localhost/phpmyadmin
3. Open the Import tab.
4. Select the `database.sql` file.
5. Execute the SQL import.

The SQL script creates the `student_loan_platform` database and its initial tables.

### 5. Configure PHP Database Connection

Check the PHP configuration files inside the `php/` directory.

Configure the database connection using your local MySQL settings:

```php
$host = "localhost";
$username = "root";
$password = "";
$database = "student_loan_platform";
```

Adjust the connection according to the existing PHP implementation.

### 6. Run the Application

Open your browser:

```text
http://localhost/student-loan-platform/
```

## 🎯 Project Objectives

- Make student loan opportunities easier to explore.
- Simplify the loan request process.
- Connect borrowers with potential lenders.
- Provide a platform for student-focused fundraising.
- Encourage community support through crowdfunding.
- Organize loan and donation information using a centralized database.

## 🔮 Future Improvements

- Secure user authentication and authorization
- Student profile management
- Loan application status tracking
- Lender dashboard
- Online payment gateway integration
- Donation payment integration
- Email notifications
- Loan repayment tracking
- Improved administrative dashboard
- Enhanced security and data validation

## 👨‍💻 Developer

**Md. Omer Faruq**

BSc in Computer Science & Engineering  
Major in Software Engineering  
United International University (UIU), Bangladesh

**GitHub:** https://github.com/mdOmerfaruq

## 📄 License

This project is developed for educational and academic purposes. Contact the developer before redistribution or commercial use.
