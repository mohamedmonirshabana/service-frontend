import { useEffect, useState } from "react";
import ProvideresData from "./ProvideresData";
const ProviderRequest = () => {
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  const [providerData, setProviderData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/serviceprovider/providerrequest", {
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
        setProviderData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3">
      {providerData.map((data) => (
        <ProvideresData
          key={data._id}
          provid={data._id}
          provName={data.user_id.username}
          provPhone={data.user_id.phone}
          provimg={data.user_id.profilepics}
          provservice={data.service_id.title}
          provprice={data.serviceprice}
        />
      ))}
    </div>
  );
};

export default ProviderRequest;
