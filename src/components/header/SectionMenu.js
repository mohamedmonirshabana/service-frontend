import { useState } from "react";
const SectionMenu = (props) => {
  //   const [hddata, setHddata] = useState(props.result);

  return (
    <section
      className={`z-20 absolute left-32 w-48 bg-black text-white mt-24 flex flex-col ${
        props.result ? "" : "hidden"
      }`}
    >
      <div className="border-b-2 border-white flex justify-between pb-3 ">
        <a href="#" className="ml-2">
          Login
        </a>
        <a href="#" className="mr-2">
          Register
        </a>
      </div>
    </section>
  );
};

export default SectionMenu;
