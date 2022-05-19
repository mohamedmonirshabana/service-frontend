import { useState } from "react";
import SectionMenu from "./SectionMenu";
const Nav = (props) => {
  const [res, setres] = useState(false);
  const togleHandler = () => {
    if (res) {
      setres(false);
    } else {
      setres(true);
    }
  };
  return (
    <nav className=" z-50 bg-black text-white h-16 w-100 mx-0 text-center flex flex-row justify-between items-center px-36 drop-shadow">
      <button>
        <img
          src="../img/menu-item-01.svg"
          alt=""
          className="w-5 h-5"
          onClick={togleHandler}
        />
      </button>
      <div>
        <img src="../img/logo.svg" className="w-20 h-6" alt="" />
      </div>
      <SectionMenu result={res} />
    </nav>
  );
};

export default Nav;
