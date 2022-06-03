// import { useState } from "react";
import { Link } from "react-router-dom";
import MenuD from "./MenuD";
import Log from "./Log";
import NotLog from "./NotLog";
const SectionMenu = (props) => {
  //   const [hddata, setHddata] = useState(props.result);
  const token = localStorage.getItem("token");
  console.log("header");
  console.log(token);
  return (
    <section
      className={` absolute left-32 w-48 bg-black text-white mt-24 flex z-999 flex-col ${
        props.result ? "block" : "hidden"
      }`}
    >
      <div className="z-999 border-b-2 border-white flex justify-between pb-3 ">
        {token === null ? <Log /> : <NotLog />}
      </div>
      {/* <MenuD /> */}
    </section>
  );
};

export default SectionMenu;
