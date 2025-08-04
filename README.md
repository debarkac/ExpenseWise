# 💸 ExpenseWise

**ExpenseWise** is a full-stack expense tracking application that allows users to manage their income and expenses in a structured and visual way. With this app, users can gain insights into their spending habits, organize their finances, and make better financial decisions.

---

## 🚀 Features

- 🔐 User Authentication (Register & Login with JWT) 
- 📥 Add and View Incomes & Expenses
- 📊 Dashboard to track and visualize spending patterns
- 📤 Upload and manage profile images
- 📁 Export data to Excel (Income & Expense reports)
- 🌐 Protected API routes with middleware
- 🔄 Responsive frontend with modern UI
- 🧾 Generate downloadable PDF reports *(using jsPDF)*

---

## 🖥️ Tech Stack

### 🧠 Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Tokens)
- Multer (for image upload)
- XLSX (Excel file generation)
- dotenv

### 🎨 Frontend
- React.js
- Tailwind CSS
- Vite
- Axios
- React Router
- Recharts (for graphs)
- jsPDF + jsPDF AutoTable (for PDFs)
- Emoji Picker, Toasts, and Icons

---

## 🔐 API Endpoints

### Auth Routes (`/api/auth`)
- `POST /register` – Register a new user
- `POST /login` – Login user and get token
- `GET /get-user` – Get user profile (protected)
- `POST /upload-image` – Upload profile image (protected)

### Income Routes (`/api/income`)
- `POST /add` – Add income (protected)
- `GET /get` – Get all income (protected)
- `DELETE /:id` – Delete income (protected)
- `GET /download-excel` – Download income data as Excel

### Expense Routes (`/api/expense`)
- `POST /add` – Add expense (protected)
- `GET /get` – Get all expenses (protected)
- `DELETE /:id` – Delete expense (protected)
- `GET /download-excel` – Download expenses as Excel

### Dashboard Route (`/api/dashboard`)
- `GET /` – Get overall dashboard data (protected)

---

### 📦 Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Create a .env file with:

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

### 🌐 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
