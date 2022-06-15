import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateService = () => {
  const [categories, setCategries] = useState([]);
  let navigate = useNavigate();
  const categoryid = useRef();
  const servicetitle = useRef();
  const description = useRef();
  const token = localStorage.getItem("token");
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
        setCategries(data);
      });
  }, []);
  function createnav(event) {
    event.preventDefault();
    const myData = {
      category_Id: categoryid.current.value,
      title: servicetitle.current.value,
      description: description.current.value,
    };
    // console.log(myData);
    fetch("http://localhost:8000/api/service/", {
      method: "POST",
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
        <form onSubmit={createnav}>
          <div className="flex my-2">
            <label htmlFor="cateval" className="my-auto">
              Category Name :
            </label>
            <select
              id="cateval"
              className="bg-slate-50 p-2 rounded-md shadow-md border focus:outline-none mx-2"
              ref={categoryid}
            >
              <option value="0">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex my-2">
            <label htmlFor="serv" className="my-auto">
              Service Name :
            </label>
            <input
              type="text"
              id="serv"
              className="bg-slate-50 p-2 rounded-md shadow-md border focus:outline-none mx-2"
              ref={servicetitle}
            />
          </div>
          <div className="flex my-2">
            <label htmlFor="desc" className="my-auto">
              Description :
            </label>
            <input
              type="text"
              id="desc"
              className="bg-slate-50 p-2 rounded-md shadow-md border focus:outline-none mx-2"
              ref={description}
            />
          </div>
          <div className="flex my-2">
            <button className="bg-slate-800 text-white p-3 rounded-md shadow-sm">
              Create Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
