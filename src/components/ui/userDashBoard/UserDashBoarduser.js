import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DashBoardHeaderUi from "./DashBoardHeaderUi";
import SideMenu from "../../dashboard/SideMenu";

const UserDashBoarduser = (props) => {
  return (
    <div>
      <DashBoardHeaderUi />
      <main className="w-full grid grid-cols-12 gap-4 bg-slate-100 absolute mt-16">
        <SideMenu role="user" />
        {props.children}
      </main>
    </div>
  );
};

export default UserDashBoarduser;
