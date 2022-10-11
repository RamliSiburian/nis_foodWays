import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import './App.css';
import Header from "./components/header";
import { PopularList } from './components/Popular-restaurant-list';
import { NearRestaurantList } from './components/Near-restaurant-list';


function App() {
  return (
    <>
      <Header />
      <PopularList />
      <NearRestaurantList />
    </>
  );
}

export default App;
