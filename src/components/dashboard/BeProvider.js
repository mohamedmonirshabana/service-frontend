import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProviderService from "./ProviderService";
const BeProvider = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryvalue, setCategoryValue] = useState();
  const [activeservice, setActiveService] = useState(false);
  const [serviceArr, setServiceArr] = useState([]);
  let serviceData = [];
  // const refcategoryvalue = useRef();
  //   const servicevaalue = useRef();
  useEffect(() => {
    fetch("http://localhost:8000/api/category", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);
  function selectcat(event) {
    event.preventDefault();
    setCategoryValue(event.target.value);
    // console.log(categoryvalue);
    if (event.target.value !== "0") {
      navigate(`/userdashboard/beprovider/service/${event.target.value}`);
      //getservice(event.target.value);
      //   setActiveService(false);
      // fetch(
      //   `http://localhost:8000/api/service/category/${event.target.value}`,
      //   {
      //     method: "GET",
      //   }
      // )
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     // console.log(data);
      //     serviceData = [...data];
      //     setServiceArr(serviceData);
      //     // console.log(typeof servicearr);
      //     // console.log(serviceData);

      //     // setServiceArr(data);
      //     // console.log(servicearr);
      //     setActiveService(true);
      //   });
    }
  }
  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      <div className="flex flex-col h-auto">
        <div className="flex p-3">
          <label htmlFor="category" className="my-auto">
            Select Category :
          </label>
          <select
            className="p-3 rounded-md ml-3 shadow border"
            id="category"
            onChange={selectcat}
          >
            <option value="0">Select Provider</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="flex p-3">
          <label htmlFor="service" className="my-auto">
            Select service :
          </label>
          {/* {serviceArr} */}
        {/* <select className="p-3 reounded-md ml-3 shadow border" id="service">
            <option value="0">Select Service</option>
            {serviceArr.map((ser) => (
              <option key={ser._id} value={ser._id}>
                {ser.title}
              </option>
            ))}
          </select>
        </div> */}{" "}
        {/* <ProviderService data={serviceData} /> */}
        {/* <ProviderService categoryid={categoryvalue} /> */}
      </div>
    </div>
  );
};

export default BeProvider;
