import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Link, useNavigate } from "react-router-dom";
import RequestMap from "./RequestMap";
const ProviderRequest = (props) => {
  const regDate = new Date(props.cdate);
  const reqid = localStorage.getItem("uid");
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const uYear = regDate.getFullYear();
  const uMonth = regDate.toLocaleString("en-US", { month: "2-digit" });
  const uDay = regDate.toLocaleDateString("en-US", { day: "2-digit" });
  // console.log(props.cMap);
  function confirmservice(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/api/requestservice/confirm/${reqid}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        navigate(`/providerdashboard/client/${reqid}`, { replace: true });
      }
    });
  }
  return (
    <div className="bg-white rounded-lg px-3 py-3 shadow-lg flex flex-col w-60 mt-4 mx-3">
      <div className="flex flex-row justify-between content-center h-9">
        <div className="flex flex-row content-center h-9">
          <div className="rounded-full bg-black text-white font-bold text-center w-9 h-9 text-lg p-1 mr-1">
            R
          </div>
          <div className="flex flex-col">
            <div className="font-semibold items-center ml-1 my-auto">
              {props.usname}
            </div>
            <Link to="#" className="text-xs">
              {uYear}-{uMonth}-{uDay}
            </Link>
          </div>
        </div>
      </div>

      <div className="text-xl font-bold text-center mt-5">Request for you</div>
      <div className="w-full bg-slate-100">
        {/* <RequestMap cord={props.cMap} /> */}
      </div>
      <div className="flex flex-row justify-between h-10 mt-7">
        <button className="text-sm bg-red-800 text-white p-2 rounded-xl shadow-md my-auto hover:bg-red-500">
          Remove
        </button>

        <button
          className="my-auto text-sm bg-blue-800 text-white p-2 rounded-xl shadow-md hover:bg-blue-500"
          onClick={confirmservice}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ProviderRequest;
