import { useEffect, useState } from "react";
import CategoriesCards from "./CategoriesCards";
import { Link } from "react-router-dom";
const AllCategories = () => {
  const [categories, setCategories] = useState([]);
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
        console.log(data);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3">
      <div className="flex my-2">
        <div className="my-auto"> Create Category :</div>
        <Link
          to="/admindashboard/createcategory/"
          className="bg-slate-800 text-white p-2 rounded-md shadow-md mx-3 "
        >
          Create Category
        </Link>
      </div>
      {categories.map((category) => (
        <CategoriesCards
          key={category._id}
          catname={category.categoryName}
          com={category.appcommission}
          catid={category._id}
        />
      ))}
    </div>
  );
};

export default AllCategories;
