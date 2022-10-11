import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import './App.css';
import Navigation from "./components/Navigation";
// navigation / routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import pages
import Login from "./pages/login"
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Navigation />
      {/* Header */}
      <Header />
      <Routes>
        {/* Call pages */}
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
