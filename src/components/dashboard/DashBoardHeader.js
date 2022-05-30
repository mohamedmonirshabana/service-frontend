import { Link } from "react-router-dom";

const DashBoardHeader = (props) => {
  return (
    <header>
      <nav className=" w-full h-16 bg-slate-600 flex flex-row justify-between text-white p-5 shadow-lg fixed z-100">
        <div className="flex justify-between w-20">
          <img
            src={props.imageurl}
            alt={props.username}
            className="w-8 h-8 rounded-full my-auto"
          />
          <Link to="#">{props.username}</Link>
        </div>
        <div>
          <Link to="#">Log out</Link>
        </div>
      </nav>
    </header>
  );
};

export default DashBoardHeader;
