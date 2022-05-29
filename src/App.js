// import Home from "./components/Home/Home";
// import Account from "./components/auth/Account";
import { Route, Routes } from "react-router-dom";
// import RequestTest from "./components/RequestTest/RequestTest";
// import SignInForm from "./components/auth/SignInForm";
// import SignUpForm from "./components/auth/SignUpForm";
import Signin from "./pages/account/SignIn";
import Signup from "./pages/account/Signup";
import Homepage from "./pages/home/Homepage";
import UserDashBoard from "./pages/userDashBoard/DashBoard";
// import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/userdashboard/" element={<UserDashBoard />} />
        {/* <Route path="/auth/signup" element={<SignUpForm />} /> */}
      </Routes>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/auth/login" element={<Account />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
