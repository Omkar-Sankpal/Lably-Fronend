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

## ⚙️ Tech Stack

| Layer           | Technology                        |
|------------------|------------------------------------|
| Frontend Framework | [React 19](https://react.dev/)             |
| Styling         | [Tailwind CSS](https://tailwindcss.com/) |
| Animations      | [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/), [Lottie](https://airbnb.io/lottie/) |
| State Management| [Zustand](https://github.com/pmndrs/zustand) |
| Routing         | [React Router v7](https://reactrouter.com/) |
| HTTP Client     | [Axios](https://axios-http.com/)         |
| Realtime Comm.  | [Socket.IO Client](https://socket.io/)   |
| Notifications   | [react-hot-toast](https://react-hot-toast.com) |
| Carousels       | [react-slick](https://react-slick.neostack.com/) + [slick-carousel](https://kenwheeler.github.io/slick/) |
| Build Tool      | [Vite](https://vitejs.dev/)             |

---

## 🚀 Deployment

The frontend is deployed on **Render**. You can access the deployed site here:  
👉 https://hack-of-clans-frontend.onrender.com

---

## 📁 Project Structure

```bash
Frontend/
├── public/                     # Public static assets
├── src/                        # Main source code
│   ├── assets/                # Images, logos, and static assets
│   ├── components/            # Reusable UI components
│   ├── explore/               # Exploration or discovery-related views
│   ├── myteams/               # Team management views and components
│   ├── pages/                 # Core route-level pages (Dashboard, Login, etc.)
│   ├── profile/               # User profile-related components/pages
│   ├── store/                 # Zustand state management store
│   ├── utils/                 # Utility functions/helpers
│   ├── App.jsx                # Root component
│   ├── index.css              # Global stylesheet
│   └── main.jsx               # App entry point
├── .gitignore                 # Files to ignore in git
├── index.html                 # HTML entry file for Vite
├── package.json               # NPM dependencies and scripts
├── package-lock.json          # Lockfile for consistent installs
├── postcss.config.js          # PostCSS config for Tailwind
├── tailwind.config.js         # Tailwind CSS custom configuration
├── eslint.config.js           # ESLint rules
├── vite.config.js             # Vite dev/build config
└── README.md                  # Project documentation
```

## 🛠️ Getting Started

Clone and run the project locally:  

Do setup backend from the backend repo

```bash
git clone https://github.com/Omkar-Sankpal/Hack_Of_Clans_Frontend.git
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

