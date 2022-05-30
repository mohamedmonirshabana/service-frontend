import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ServiceProviders = (props) => {
  let navigate = useNavigate();
  // const Data = props.myData;
  // console.log("my Data");
  // console.log(props.servicerproviderid);
  const providerid = props.servicerproviderid;
  const userid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  function sendserviceReuest(event) {
    event.preventDefault();
    //     {
    //   "service_provider_Id": "string",
    //   "user_Id": "string"
    // }
    const sendData = {
      service_provider_Id: providerid,
      user_Id: userid,
    };

    fetch("http://localhost:8000/api/requestservice", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((Response) => {
      // return Response.json();
      if (Response.status === 201) {
        navigate("/userdashboard/", { replace: true });
      }
    });
  }
  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      <div className="flex">
        <div className="my-4 bg-blue-200 shadow-md rounded-lg px-3 py-4 flex flex-col w-80">
          <div className="flex flex-row justify-between">
            <div className="flex">
              <img
                src={props.image}
                alt={props.providername}
                className="w-10 h-10 rounded-full"
              />
              <h2 className="my-auto ml-1 font-bold">{props.providername}</h2>
            </div>
            <div className="my-auto">price: {props.providerprice}</div>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div className="flex my-auto">
              <img alt="" src="../../img/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="../../img/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="../../img/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="../../img/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="../../img/star.svg" className="w-4 h-4 mx-2" />
            </div>
            <div>
              <Link to="#" className="underline my-auto">
                Comment-12
              </Link>
            </div>
          </div>
          <button
            className="mt-5 border py-3 rounded-lg hover:bg-white hover:shadow-md"
            onClick={sendserviceReuest}
          >
            Request service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;
