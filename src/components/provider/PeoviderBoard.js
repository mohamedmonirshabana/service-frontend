import { useEffect, useState } from "react";
import ProviderRequest from "./ProviderRequest";

const ProviderBoard = () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  const [providerdata, setProviderData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/requestservice/${uid}`, {
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
        // const y = JSON.stringify(data);
        setProviderData(data);
        console.log(data);
        // console.log(data[0]._id);
        // console.log(data[0]);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3">
      <div className="flex flex-row flex-wrap justify-between w-full px-4 pt-4">
        {providerdata.map((user) => (
          <ProviderRequest
            key={user._id}
            usname={user.user_Id.username}
            cdate={user.createdAt}
            cMap={user.user_Id.location.coordinates}
            serviceid={user._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProviderBoard;
