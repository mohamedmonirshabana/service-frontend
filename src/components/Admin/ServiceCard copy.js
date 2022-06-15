import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const [providerdata, setProviderdata] = useState([]);
  const serviceid = props.servid;
  const myLink = `/admindashboard/service/edit/${serviceid}`;
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/serviceprovider/getallprovider/${serviceid}`,
      {
        method: "GET",
        headers: {
          "content-type": "aaplication/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProviderdata(data);
      });
  });
  return (
    <div className="bg-white rounded-lg px-3 py-3 shadow-lg  my-2 ">
      <div className="flex flex-row my-auto p-3">
        <div className="font-semibold  ml-1 my-auto border-r-2 pr-2">
          {props.title}
        </div>
        <div className="my-auto  border-r-2 px-3">
          <Link to={myLink} className="text-sm underline my-auto ">
            Edit Service
          </Link>
        </div>
        <div className="pl-2 my-auto">{providerdata.length}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
