import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MenuD = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/category", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div>
      <ul>
        <li>sadasd</li>
        {/* {categories.map((category) => (
          <li>
            <Link key={category._id} to={`/home/category/${category._id}`}>
              {category.categoryName}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default MenuD;
