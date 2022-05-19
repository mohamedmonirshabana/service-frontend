import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestTest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/category/").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Category</h1>
      <ul>
        {data.map((dd) => (
          <li id={dd._id}>
            {dd.categoryName}-{dd._id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestTest;

/*
http://localhost:8000/api/category/
return axios.({
    method: 'post',
    baseURL: userEndpoint,
    headers: {
        common: {
            Accept: 'application/json',
        }
    }
}).then(...).catch(...);

*/
