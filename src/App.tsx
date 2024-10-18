import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";

// Main App component with Router
const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

// AppContent component with routes
const AppContent: React.FC = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
