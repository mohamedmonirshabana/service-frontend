// import Home from "./components/Home/Home";
// import Account from "./components/auth/Account";
import { Route, Router, Routes } from "react-router-dom";
// import RequestTest from "./components/RequestTest/RequestTest";
// import SignInForm from "./components/auth/SignInForm";
// import SignUpForm from "./components/auth/SignUpForm";
import Signin from "./pages/account/SignIn";
import Signup from "./pages/account/Signup";
import Homepage from "./pages/home/Homepage";
import UserDashBoard from "./pages/userDashBoard/DashBoard";
import ServiceProviderBoard from "./pages/userDashBoard/ServiceProviderBoard";
import Requestprovider from "./pages/userDashBoard/Requestprovider";
import ServiceforCategory from "./pages/userDashBoard/ServiceforCategory";
import AccountData from "./pages/account/AccountData";
import ChangePassword from "./pages/account/ChangePassword";
// import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/userdashboard/" element={<UserDashBoard />} />
        <Route
          path="/userdashboard/service/:serviceid"
          element={<ServiceProviderBoard />}
        />
        <Route
          path="/userdashboard/beprovider/"
          element={<Requestprovider />}
        />
        <Route
          path="/userdashboard/beprovider/service/:categoryid"
          element={<ServiceforCategory />}
        />
        <Route path="/account/" element={<AccountData />} />
        <Route path="/account/changepassword" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;
