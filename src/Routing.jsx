// import React, { useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import ProtectedRoute from "./ProtectedRoute";
import ActiveTodos from "./pages/ActiveTodos";
import CompeletedTodos from "./pages/CompleteTodos";
import UsersPage from "./pages/UserPage";

const Routing = () => {
  return (
    <div>
      <HashRouter>
        <ToastContainer autoClose={3000} position={"top-center"} hideProgressBar={true} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route
            path="/active"
            element={
              <ProtectedRoute>
                <ActiveTodos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/completed"
            element={
              <ProtectedRoute>
                <CompeletedTodos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />

          {/* Default Page Active Todos */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ActiveTodos />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Routing;