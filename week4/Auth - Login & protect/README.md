# Auth - Login & Protect (Backend AI Engineering - Week 4)

## 📌 Project Overview

This project implements a secure authentication system using **Node.js**, **Express.js**, **MongoDB**, **JWT (JSON Web Token)**, and **bcrypt**.

The application allows users to:

* Register with a secure password
* Login using email and password
* Receive a JWT token after successful login
* Access protected routes only with a valid token
* Return proper HTTP status codes (`401 Unauthorized` and `403 Forbidden`) when authentication fails

---

## 🚀 Features

* User Registration
* Password Hashing using bcrypt
* User Login
* JWT Authentication
* Protected Routes
* Environment Variable Configuration
* Error Handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcrypt
* dotenv

---

## 📁 Project Structure

```
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/auth-login-protect.git
```

Move into the project folder:

```bash
cd auth-login-protect
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root.

```
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/authdb

JWT_SECRET=mysecretkey123
```

---

## ▶️ Run the Project

Development mode:

```bash
npm run dev
```

or

```bash
npm start
```

Server runs at:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### Register

**POST**

```
/api/auth/register
```

Request Body

```json
{
  "name":"Sai",
  "email":"sai@gmail.com",
  "password":"123456"
}
```

Response

```json
{
  "message":"User registered successfully"
}
```

---

### Login

**POST**

```
/api/auth/login
```

Request Body

```json
{
  "email":"sai@gmail.com",
  "password":"123456"
}
```

Response

```json
{
  "token":"JWT_TOKEN"
}
```

---

### Protected Route

**GET**

```
/api/auth/profile
```

Header

```
Authorization: Bearer JWT_TOKEN
```

Response

```json
{
  "message":"Protected Route",
  "user":{
      "id":"USER_ID"
  }
}
```

---

## ❌ Authentication Errors

### Missing Token

Status Code

```
401 Unauthorized
```

Example

```json
{
  "message":"No token provided"
}
```

---

### Invalid Token

Status Code

```
403 Forbidden
```

Example

```json
{
  "message":"Invalid token"
}
```

---

## 🧪 Testing

Use **Postman** to test the APIs.

Test the following scenarios:

* User Registration
* User Login
* Access protected route with valid token
* Access protected route without token
* Access protected route with invalid token

---

## 📷 Screenshots

Include screenshots of:

* Successful Registration
* Successful Login
* JWT Token
* Protected Route
* 401 Unauthorized
* 403 Forbidden

---

## 👨‍💻 Author

**Sai Surya**

Backend AI Engineering Assignment

Week 4 – Auth: Login & Protect
