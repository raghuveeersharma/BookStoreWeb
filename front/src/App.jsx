import React from "react";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/course"
              element={authUser ? <Courses /> : <Navigate to="/Sign-up" />}
            />
            <Route path="/Sign-up" element={<Signup />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
        <Toaster />
      </div>
    </>
  );
}

export default App;
