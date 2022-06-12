import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const token = localStorage.getItem("token");
  const comname = useRef();
  const comapp = useRef();
  let navigate = useNavigate();
  function addCategory(event) {
    event.preventDefault();
    const myData = {
      categoryName: comname.current.value,
      appcommission: parseFloat(comapp.current.value),
    };
    fetch(`http://localhost:8000/api/category`, {
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
      <form onSubmit={addCategory}>
        <div className="my-2">
          <label htmlFor="catname">Category Name :</label>
          <input
            type="text"
            id="catname"
            className=" bg-slate-50 shadow-md p-2 mx-2"
            ref={comname}
          />
        </div>
        <div className="my-2">
          <label htmlFor="catcom">Commission</label>
          <input
            type="number"
            id="catcom"
            className="bg-slate-50 shadow-md p-2 mx-2"
            ref={comapp}
          />
          %
        </div>
        <div className="my-2">
          <button className="bg-slate-800 text-white p-3 rounded-md shadow-md">
            Create Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
