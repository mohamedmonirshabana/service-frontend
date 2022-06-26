import { useState } from "react";
import { Link } from "react-router-dom";
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
    <nav className=" z-999 bg-yellow-400 text-white h-16 w-100 mx-0 text-center flex flex-row justify-between items-center px-36 drop-shadow fixed w-full">
      <button>
        <img
          src="../img/menu-item-01.svg"
          alt=""
          className="w-5 h-5"
          onClick={togleHandler}
        />
      </button>
      <Link to="/">
        <img src="../img/logo.svg" className="w-20 h-6" alt="" />
      </Link>
      <SectionMenu result={res} />
    </nav>
  );
};

export default Nav;
