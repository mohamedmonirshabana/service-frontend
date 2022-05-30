import DashBoardHeader from "../../dashboard/DashBoardHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const DashBoardHeaderUi = () => {
  const userID = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  const [username, setUserName] = useState("");
  const [uimage, setUImage] = useState("");
  let navigate = useNavigate();

  if (token === "") {
    navigate("/auth/signin", { replace: true });
  }
  useEffect(() => {
    fetch(`http://localhost:8000/api/account/${userID}`, {
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
        setUserName(data.username);
        setUImage(data.profilepics);
      });
  }, []);
  return <DashBoardHeader username={username} imageurl={uimage} />;
};

export default DashBoardHeaderUi;
