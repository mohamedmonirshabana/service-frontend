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
    <nav className="bg-black text-white h-16 w-100 mx-0 text-center flex justify-between items-center px-36 drop-shadow">
      <a href="#">
        <img
          src="./img/menu-item-01.svg"
          className="w-5 h-5"
          onClick={togleHandler}
        />
      </a>
      <a href="#">
        <img src="./img/logo.svg" className="w-20 h-6" />
      </a>
      <SectionMenu result={res} />
    </nav>
  );
};

export default Nav;
