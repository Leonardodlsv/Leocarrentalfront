import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import User from "./Routes/User";
import Vehicles from "./Routes/Vehicles";
import Booking from "./Routes/Booking";
import Support from "./Routes/Support";
import NotFoundPage from "./Routes/NotFoundPage";
import NavBar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";


export default function App() {

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/vehicles" element={<Vehicles />}/>
          <Route path="/booking" element={<Booking />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="*" element={<NotFoundPage />}/>          
        </Routes>

      <Footer/>
    </BrowserRouter>
  )
}


