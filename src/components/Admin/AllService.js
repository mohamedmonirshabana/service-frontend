import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesforCat from "./ServicesforCat";
const Allservice = () => {
  const [categorydata, setCategorydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/category", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategorydata(data);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3 flex flex-col">
      <div className="flex ">
        <h2 className="text-xl font-bold mr-2">Categories</h2>
        <Link
          to="/admindashboard/createservice/"
          className="my-auto bg-slate-800 text-white p-2 rounded-md"
        >
          Add service
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-between w-full px-4 pt-4">
        {categorydata.map((data) => (
          <ServicesforCat
            categoryName={data.categoryName}
            key={data._id}
            catid={data._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Allservice;
