import { useNavigate } from "react-router-dom";

const ProvideresData = (props) => {
  let navigate = useNavigate();
  const provider_id = props.provid;
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  function confirmaccount(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/api/serviceprovider/confirm/${provider_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        navigate("/admindashboard/", { replace: true });
      }
      // return response.json();
    });
  }
  function rejectaccount(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/api/serviceprovider/${provider_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        navigate("/admindashboard/", { replace: true });
      }
      //   return response.json();
    });
  }
  return (
    <div className="border flex flex-col my-3 w-1/4 p-3 shadow-md bg-slate-50">
      <div className="flex my-2">
        <img
          className="w-12 h-12 rounded-full mx-2  "
          alt={props.provName}
          src={props.provimg}
        />
        <div>
          <div className="text-lg font-bold my-auto">{props.provName}</div>
          <div className="text-sm">{props.provPhone}</div>
        </div>
      </div>
      <div className="flex my-2 ">
        <div>service Name :</div>
        <div>{props.provservice}</div>
      </div>
      <div className="flex my-2 ">
        <div>Price :</div>
        <div>{props.provprice}</div>
      </div>
      <div className="flex my-2 ">
        <button
          onClick={confirmaccount}
          className="bg-slate-800 text-white p-3 mx-3 rounded-md"
        >
          Confirm
        </button>
        <button
          onClick={rejectaccount}
          className="bg-red-800 text-white p-3 mx-3 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProvideresData;
