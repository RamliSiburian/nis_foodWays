import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import './App.css';
import Navigation from "./components/Navigation";
import { PopularList } from "./components/Popular-restaurant-list";
import { NearRestaurantList } from "./components/Near-restaurant-list";
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
      <PopularList />
      <NearRestaurantList />
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
