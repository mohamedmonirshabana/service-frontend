import { useState, useEffect } from "react";
import { propTypes } from "react-z-index";
import Categories from "./Categories";

const MainBoard = () => {
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
    <div className="col-span-10 bg-white p-3">
      <div className="flex flex-row flex-wrap justify-between w-full px-4 pt-4">
        {categorydata.map((data) => (
          <Categories
            categoryName={data.categoryName}
            key={data._id}
            catid={data._id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBoard;
