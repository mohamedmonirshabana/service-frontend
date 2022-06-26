// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import RequestMap from "./RequestMap";
import ButOper from "./ButOper";

const ProviderProcess = () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  const [username, setUsername] = useState("");
  const [userphone, setUserPhone] = useState("");
  const [locLate, setLocLate] = useState();
  const [locLng, setLoclng] = useState();
  const [proid, setProid] = useState();
  useEffect(() => {
    fetch(`http://localhost:8000/api/serviceprocess/provider/${uid}`, {
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
        // console.log(data.user_id.location.coordinates[0]);
        setUsername(data.user_id.username);
        setUserPhone(data.user_id.phone);
        setLocLate(data.user_id.location.coordinates[0]);
        setLoclng(data.user_id.location.coordinates[1]);
        setProid(data._id);
      });
  }, []);
  return (
    <div className="bg-white col-span-10 flex flex-col">
      <div className="bg-slate-400 px-4 py-5 rounded-lg m-3 border shadow-lg w-1/2 flex flex-col">
        <div className="font-bold text-xl text-center my-2">{username}</div>
        <div className="underline text-center my-2">{userphone}</div>
        <div className="w-full my-2">
          <RequestMap cor1={locLng} cor2={locLate} />
        </div>
        <ButOper serid={proid} />
      </div>
    </div>
  );
};

export default ProviderProcess;
