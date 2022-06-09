import { Link } from "react-router-dom";
const NotLog = () => {
  const role = localStorage.getItem("r");
  let urt = "";
  if (role === "user") {
    urt = "/userdashboard/";
  } else if (role === "PROVIDER") {
    urt = "/providerdashboard/";
  }
  return (
    <div className="w-full">
      <Link to={urt} className="text-center">
        DashBoard
      </Link>
    </div>
  );
};

export default NotLog;
