import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import MainBoard from "../../components/dashboard/MainBoard";
import RightSideMenu from "../../components/dashboard/RightSideMenu";
import SideMenu from "../../components/dashboard/SideMenu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserDashBoard = (props) => {
  const [username, setUserName] = useState("");
  const [uid, setUId] = useState("");
  const [uemail, setUEmail] = useState("");
  const [uimage, setUImage] = useState("");
  let navigate = useNavigate();
  //-----------
  const token = localStorage.getItem("token");
  const userid = localStorage.getItem("uid");
  if (token === "") {
    navigate("/auth/signin", { replace: true });
  }
  // console.log(userid);
  fetch(`http://localhost:8000/api/account/${userid}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      setUserName(data.username);
      setUId(data._id);
      setUEmail(data.email);
      setUImage(data.profilepics);
    });
  return (
    <div>
      <DashBoardHeader username={username} imageurl={uimage} />
      <main className="w-full grid grid-cols-12 gap-4 bg-slate-100 absolute mt-16">
        <SideMenu role="user" />
        <MainBoard />
      </main>
    </div>
  );
};

export default UserDashBoard;
