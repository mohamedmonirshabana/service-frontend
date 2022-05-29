// import { useState } from "react";
import { Link } from "react-router-dom";
import MenuD from "./MenuD";
const SectionMenu = (props) => {
  //   const [hddata, setHddata] = useState(props.result);

  return (
    <section
      className={` absolute left-32 w-48 bg-black text-white mt-24 flex flex-col ${
        props.result ? "block" : "hidden"
      }`}
    >
      <div className="z-50 border-b-2 border-white flex justify-between pb-3 ">
        <Link to="/auth/signin" className="ml-2">
          Login
        </Link>
        <Link to="/auth/signup" className="mr-2">
          Register
        </Link>
      </div>
      <MenuD />
    </section>
  );
};

export default SectionMenu;
