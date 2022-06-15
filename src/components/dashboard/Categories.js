import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
const Categories = (props) => {
  const [allservice, setAllService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/service/category/${props.catid}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllService(data);
      });
  }, []);
  return (
    <div className="flex flex-col w-full ">
      <div className=" text-xl font-bold my-4 p-3 bg-gray-50">
        {props.categoryName}
      </div>
      <div className="flex justify-around flex-wrap">
        {allservice.map((data) => (
          <ServiceCard
            key={data._id}
            title={data.title}
            description={data.description}
            servid={data._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
