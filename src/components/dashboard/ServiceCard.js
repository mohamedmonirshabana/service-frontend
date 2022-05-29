import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const [providerdata, setProviderdata] = useState([]);
  const serviceid = props.servid;
  const myLink = `/userdashboard/service/${serviceid}`;
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
    <div className="bg-white rounded-lg px-3 py-3 shadow-lg flex flex-col w-60 mt-4 mx-3">
      <div className="flex flex-row justify-between content-center h-9">
        <div className="flex flex-row content-center h-9">
          <div className="rounded-full bg-black text-white font-bold text-center w-9 h-9 text-lg p-1">
            S
          </div>
          <div className="font-semibold items-center ml-1 my-auto">
            {props.title}
          </div>
        </div>
        <Link to={myLink} className="text-lg">
          ....
        </Link>
      </div>
      <div className="text-sm text-center mt-5">{props.description}</div>
      <div className="flex flex-row justify-between h-10 mt-7">
        <Link to={myLink} className="text-sm underline my-auto">
          All provider
        </Link>

        <div className="flex">
          <div className="my-auto static mr-7 mt-1">
            <img
              alt=""
              className="w-8 h-8 rounded-full my-auto z-50 relative top-0 left-0"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880"
            />
            <img
              alt=""
              className="w-8 h-8 rounded-full relative z-40 -top-8 left-3"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            />
            <img
              alt=""
              className="w-8 h-8 rounded-full relative z-30 -top-16 left-6"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            />
          </div>
          <Link to="#" className="my-auto text-base">
            +{providerdata.length}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
