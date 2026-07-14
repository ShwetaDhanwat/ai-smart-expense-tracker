import { ThemeProvider } from "./context/ThemeContext";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ExpenseProvider } from "./context/ExpenseContext";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ExpenseProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </ExpenseProvider>
    </ThemeProvider>
  </React.StrictMode>
);