// import { useState } from "react";
import MenuD from "./MenuD";
const SectionMenu = (props) => {
  //   const [hddata, setHddata] = useState(props.result);

  return (
    <section
      className={`z-50 absolute left-32 w-48 bg-black text-white mt-24 flex flex-col ${
        props.result ? "block" : "hidden"
      }`}
    >
      <div className="z-50 border-b-2 border-white flex justify-between pb-3 ">
        <button className="ml-2">Login</button>
        <button className="mr-2">Register</button>
      </div>
      <MenuD />
    </section>
  );
};

export default SectionMenu;
