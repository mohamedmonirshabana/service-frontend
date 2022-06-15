import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const EditServiceAdmin = (props) => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [serviceData, setServiceData] = useState([]);
  const serviceTitle = useRef();
  const ServiceDescription = useRef();
  const ServiceID = useRef();
  const serviceid = props.servID;
  useEffect(() => {
    fetch(`http://localhost:8000/api/service/${serviceid}`, {
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
        setServiceData(data);
        console.log(data);
      });
  }, []);
  function updateService(event) {
    event.preventDefault();
    const myData = {
      category_Id: serviceData.category_Id,
      title: serviceTitle.current.value,
      description: ServiceDescription.current.value,
    };
    console.log(myData);
    fetch(`http://localhost:8000/api/service/${serviceid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(myData),
    }).then((response) => {
      console.log(response.status);
      if (response.status >= 200) {
        navigate("/admindashboard/", { replace: true });
      }
    });
  }
  return (
    <div className="col-span-10 bg-white p-3">
      <div className="flex flex-col">
        <div className="flex my-3">
          <label htmlFor="servicetitle" className="my-auto">
            Service name :
          </label>
          <input
            type="text"
            id="servicetitle"
            ref={serviceTitle}
            placeholder={serviceData.title}
            className="bg-slate-100  p-2 rounded-md shadow-md focus:outline-none mx-3"
          />
          <label className="my-auto">{serviceData.title}</label>
        </div>
        <div className="flex my-3">
          <label htmlFor="servicedescription" className="my-auto">
            Description :{" "}
          </label>
          <input
            type="text"
            id="servicedescription"
            ref={ServiceDescription}
            className="bg-slate-100  p-2 rounded-md shadow-md focus:outline-none mx-3"
            placeholder={serviceData.description}
          />
          <label>{serviceData.description}</label>
        </div>
        <div className="flex my-3">
          <button
            className="bg-slate-800 text-white p-2 rounded-md shadow-md "
            onClick={updateService}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditServiceAdmin;
