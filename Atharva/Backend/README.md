# 🏥 Assignment 02: Hospital Management REST API

A RESTful Hospital Management API built using **Node.js, Express.js, MongoDB, Mongoose, Passport.js, bcryptjs, and Express Session**.

## 🚀 Features

* Hospital CRUD operations
* Available beds filtering
* City and bed-based search
* User registration & login
* Password hashing with bcrypt
* Passport Local authentication
* Session-based authentication
* Error handling & request logging

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js
* bcryptjs
* Express Session

## 🌐 Live API

**Deployed Backend:**
https://assignment-2-hospital-management-api-3.onrender.com

## ▶️ Run Locally

```bash
npm install
node server.js
```

Create a `.env` file with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
SESSION_SECRET=your_session_secret
```

## 📌 Main Endpoints

```text
GET    /
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

GET    /api/hospitals
GET    /api/hospitals/available
GET    /api/hospitals/:id
POST   /api/hospitals
PUT    /api/hospitals/:id
DELETE /api/hospitals/:id
```

## 👨‍💻 Assignment

**Assignment 02 – Hospital Management REST API**
Backend Development
