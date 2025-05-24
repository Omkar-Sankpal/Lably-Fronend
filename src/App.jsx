import { Routes, Route, Navigate } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import SettingsPage from "./pages/SettingsPage";
import StudentDash from "./pages/StudentDash";
import Navbar from "./components/Navbar";
import TeacherDash from "./pages/TeacherDash";
import { useTeacherStore } from "./store/use.Teacher.Store";
import Teacher from "./pages/Teacher";
import Assignments from "./pages/Assignments";
import SelectedA from "./pages/SelectedA";
import { Toaster } from "react-hot-toast";
import Student from "./pages/Student";
import Home from "./pages/Home";
import DevMessage from "./pages/DevMessage";
import AttendancePage from "./pages/AttendancePage";
import MarkingPage from "./pages/MarkingPage";
import UT from "./pages/UT";
import TermWork from "./pages/TermWork";

const App = () => {
  const { theme } = useThemeStore();
  const { teacherId, t_name, t_sub, batches, batch, assignments , student } = useTeacherStore();

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/student-dash" element={<StudentDash />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/teacher-dash" element={<TeacherDash />} />
        <Route
          path="/teacher"
          element={
            teacherId ? (
              <Teacher t_name={t_name} t_sub={t_sub} batches={batches} />
            ) : (
              <Navigate to="/teacher-dash" />
            )
          }
        />
        <Route
          path="/batch"
          element={
            teacherId ? (
              <Assignments batch={batch} subject={t_sub} assignments={assignments} />
            ) : (
              <Navigate to="/teacher-dash" />
            )
          }
        />
        <Route
          path="/assignment"
          element={
            teacherId ? (
              <SelectedA/>
            ) : (
              <Navigate to="/teacher-dash" />
            )
          }
        />
        <Route
          path="/attendance"
          element={
            teacherId ? (
              <AttendancePage batch={batch}/>
            ) : (
              <Navigate to="/teacher-dash" />
            )
          }
        />
        <Route
          path="/mark-attendance"
          element={
            teacherId ? (
              <MarkingPage batch={batch}/>
            ) : (
              <Navigate to="/teacher-dash" />
            )
          }
        />
        <Route
          path="/unit-test"
          element={
            teacherId ? (
              <UT batch={batch}/>
            ) : (
              <Navigate to="/teacher-dash" />
            )
          }
        />
        <Route
          path="/term-work"
          element={
            teacherId ? (
              <TermWork batch={batch}/>
            ) : (
              <Navigate to="/teacher-dash" />
            )
          }
        />
        <Route
          path="/student"
          element={
            student ? (
              <Student/>
            ) : (
              <Navigate to="/student-dash" />
            )}
        />
        <Route
          path="/"
          element={
              <Home />}
        />
        <Route
          path="/devmessage"
          element={
              <DevMessage />}
        />

      </Routes>

      <Toaster/>
    </div>
  );
};

export default App;
