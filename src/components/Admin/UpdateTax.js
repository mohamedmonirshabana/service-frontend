import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const UpdateTax = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const taxref = useRef();
  function sendNewTax() {
    const myData = {
      tax: parseFloat(taxref.current.value),
    };
    console.log(myData);
    fetch("http://localhost:8000/api/appinfo", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(myData),
    }).then((response) => {
      //   console.log(response);
      //   console.log(response.status);
      navigate("/admindashboard/", { replace: true });
      //   return response.json(myData);
    });
  }
  return (
    <div className="col-span-10 bg-white p-3 flex flex-col">
      <div className="flex  my-3">
        <div className="my-auto text-xl">Tax : &nbsp;</div>
        <input
          type="text"
          ref={taxref}
          className="bg-slate-50 shadow-md p-3 border rounded-lg focus:outline-none"
        />
      </div>
      <button
        className="bg-slate-800 text-white p-2 rounded-md shadow my-3"
        onClick={sendNewTax}
      >
        Add new Tax
      </button>
    </div>
  );
};

export default UpdateTax;
