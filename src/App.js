import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import ProductListing from "./pages/Products";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<ProductListing />} />
        </Routes>
      </div>
  );
}

export default App;
