import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const EditCategory = (props) => {
  let navigate = useNavigate();
  const categoryname = useRef();
  const appcomm = useRef();
  const catid = props.catID;
  const [cate, setCate] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/category/category/${catid}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCate(data);
        console.log(data);
      });
  }, []);
  function updateCategory(event) {
    event.preventDefault();
    const myData = {
      categoryName: categoryname.current.value,
      appcommission: parseFloat(appcomm.current.value),
    };
    fetch(`http://localhost:8000/api/category/update/${catid}`, {
      method: "PUT",
      body: JSON.stringify(myData),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        navigate("/admindashboard/", { replace: true });
      }
    });
  }
  return (
    <div className="col-span-10 bg-white p-3">
      <div>Edit Category</div>
      <form onSubmit={updateCategory}>
        <div className="flex ">
          <label htmlFor="catname" className="my-auto mx-2">
            Category Name:
          </label>
          <input
            type="text"
            className="bg-slate-50  p-2 my-2 focus:outline-none mx-2 shadow-md rounded-md"
            placeholder={cate.categoryName}
            ref={categoryname}
          />
          <label className="my-auto mx-2">{cate.categoryName}</label>
        </div>
        <div className="flex ">
          <label htmlFor="catapp" className="my-auto mx-2">
            Category Name:
          </label>
          <input
            type="number"
            className="bg-slate-50  p-2 my-2 focus:outline-none mx-2 shadow-md rounded-md"
            placeholder={cate.appcommission}
            ref={appcomm}
          />
          <label className="my-auto">{cate.appcommission}%</label>
        </div>
        <div className="flex">
          <button className="bg-slate-800 p-3 text-white rounded-md shadow-md">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;

// {
//   "_id": "627e9c77ca9a04667ac71d14",
//   "categoryName": "software Service",
//   "appcommission": 0.25,
//   "createdAt": "2022-05-13T17:59:19.303Z",
//   "updatedAt": "2022-05-13T17:59:19.303Z",
//   "__v": 0
// }
