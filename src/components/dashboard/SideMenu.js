import { Link } from "react-router-dom";

const SideMenu = (props) => {
  if (props.role === "user") {
    return (
      <div className="col-span-2 p-3">
        <div className="flex flex-col text-sm">
          <ul>
            <li className="p-3 hover:bg-white">
              <Link to="/userdashboard/">DashBoard</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="/account/">My Account</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="/account/changepassword">Change Password</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="/userdashboard/history/">Order History</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="#">Order process</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="/userdashboard/beprovider/">Join to provider</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.role === "provider") {
    return (
      <div className="col-span-2 p-3">
        <div className="flex flex-col text-sm">
          <ul>
            <li className="p-3 hover:bg-white">
              <Link to="/providerdashboard/">DashBoard</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="/account/">My Account</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="/account/changepassword">Change Password</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="#">Order History</Link>
            </li>
            <li className="p-3 hover:bg-white">
              <Link to="/providerdashboard/case">My Case</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default SideMenu;
