# Lably – Frontend

**Lably** is a lab management platform built for **Pune Institute of Computer Technology (PICT)**. It facilitates seamless handling of lab assignments, attendance, and marks for students and teachers, with dedicated dashboards for each.

This repository contains the **frontend** code of the project, developed using **React 19**, **Tailwind CSS**, **Zustand**, and animated with **GSAP**, **Framer Motion**, and **Lottie**. The project also uses **Socket.IO** for real-time communication and is deployed on **Render**.

---

## 🎯 Features

### 👩‍🏫 Teacher Dashboard

- **Manage Assignments & UT Marks:**  
  Enter, update, and manage assignment and Unit Test marks for students.
  
- **Track Attendance:**  
  Teachers can mark and update attendance for each lab session.

- **Session Management:**  
  Create and delete lab sessions with just a few clicks.

- **Term Work Overview:**  
  Easily review overall performance metrics of individual students.

---

### 👨‍🎓 Student Dashboard

- **Subject-wise Progress View:**  
  Students can track their performance in each subject — including attendance, UT marks, and assignments.

- **Overall Academic Summary:**  
  A visually appealing dashboard shows charts of attendance, assignment completion, and marks using donut and bar graphs.

- **Real-Time Updates:**  
  Immediate updates when marks or attendance are modified by the teacher.

---

## 🧑‍💻 Tech Stack

| Category         | Tech                              |
|------------------|-----------------------------------|
| Framework        | React 19                          |
| Styling          | Tailwind CSS                      |
| State Management | Zustand                           |
| Animations       | Framer Motion, GSAP, Lottie       |
| Routing          | React Router v7                   |
| HTTP Client      | Axios                             |
| Toasts           | React Hot Toast                   |
| Icons            | Lucide React                      |
| Build Tool       | Vite                              |

---

## 🚀 Deployment

The frontend is deployed on **Render**. You can access the deployed site here:  
👉 [Lably](https://lably-fronend.onrender.com)

---

## 📁 Project Structure

```bash
Frontend/
├── public/ # Static files
├── src/
│ ├── assets/ # Images, icons, logos
│ ├── components/ # Reusable UI elements
│ ├── constants/ # Configs and reusable data/constants
│ ├── pages/ # Route-level components
│ ├── store/ # Zustand stores
│ ├── App.jsx # Root component
│ ├── index.css # Global styles (Tailwind)
│ └── main.jsx # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Getting Started

Clone and run the project locally:  

Do setup backend from the backend repo

```bash
git clone https://github.com/Omkar-Sankpal/Lably-Fronend.git
cd lably-frontend
npm install
npm run dev
```

The app will be available at http://localhost:5173 (default Vite port).

Make sure the backend is running and accessible via proper API base URLs.

## 📌 Notes
- This project originally used MySQL but has since been migrated to PostgreSQL using Supabase.

- It was built to showcase SQL capabilities like:

- Custom functions, views, and triggers

- Complex joins and aggregations

- Real-time updates via WebSockets

