import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProviderCase = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  const [providerData, setProviderData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/providercase/${uid}`, {
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
  function getallMoney() {
    fetch(`http://localhost:8000/api/providercase/getallmony/${uid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      response.json();
      console.log(response.status);
      if (response.status === 200) {
        navigate("/providerdashboard", { replace: true });
      }
    });
  }
  return (
    <div className="col-span-10 bg-white p-3">
      <div className="bg-slate-300 shadow-lg px-5 py-4 rounded-md flex flex-col w-1/3">
        <div className="flex justify-center my-2">
          <div className="text-xl font-bold ">Provider Case</div>
        </div>
        <div className="flex">
          <div>Your money : </div>
          <div className="ml-2">{providerData.moneycase}</div>
        </div>
        <div className="mt-3">
          {providerData.moneycase === 0 ? (
            <button className="underline">No Action</button>
          ) : (
            <button
              className="bg-black text-white p-3 rounded-lg shadow-md hover:bg-slate-300 hover:text-black hover:border hover:border-black hover:shadow-inner"
              onClick={getallMoney}
            >
              Get All The Money
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderCase;

// // {
//   "_id": "62823c30ec7994c4470f1c6a",
//   "provider_id": "627e987b9a7c4f84134c6d5c",
//   "moneycase": 500,
//   "createdAt": "2022-05-16T11:57:36.975Z",
//   "updatedAt": "2022-06-06T22:26:52.854Z",
//   "__v": 0
// }
