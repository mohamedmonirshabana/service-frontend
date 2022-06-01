import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const ProviderService = (props) => {
  const [servicedata, setServiceData] = useState([]);
  const [serid, setSerId] = useState("");
  const [pric, setPric] = useState(0);
  const serviceid = useRef();
  const price = useRef();
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  let navigate = useNavigate();
  // console.log(props.pram);
  useEffect(() => {
    fetch(`http://localhost:8000/api/service/category/${props.pram}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setServiceData(data);
      });
  }, []);
  function getservalue(event) {
    event.preventDefault();
    setSerId(event.target.value);
    console.log("ref result");
    console.log(serviceid.current.value);
  }

  function sendRequest(event) {
    event.preventDefault();
    const senData = {
      service_id: serviceid.current.value,
      user_id: uid,
      serviceprice: price.current.value,
    };

    fetch(`http://localhost:8000/api/serviceprovider/requestprovider`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(senData),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 201) {
        navigate("/userdashboard/", { replace: true });
      }
    });
  }

  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      <div className="flex flex-col h-auto">
        <form onSubmit={sendRequest}>
          <div className="flex p-3">
            <label htmlFor="service" className="my-auto">
              Select Service :
            </label>
            <select
              className="p-3 rounded-md ml-3 shadow border"
              id="service"
              ref={serviceid}
              onChange={getservalue}
            >
              <option value="0">Select service: </option>
              {servicedata.map((ser) => (
                <option key={ser._id} value={ser._id}>
                  {ser.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex p-3">
            <label htmlFor="price" className="my-auto">
              Price :
            </label>
            <input
              type="number"
              id="price"
              ref={price}
              className="p-3 bg-slate-200 shadow ml-3 rounded-md border"
            />
          </div>
          <div className="flex p-3">
            <button className="bg-slate-800 text-white p-4 rounded-lg shadow hover:bg-slate-500">
              Provider Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderService;
