import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const EditCategory = (props) => {
  let navigate = useNavigate();
  const catid = props.catID;
  const [cate, setCate] = useState();
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
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3">
      <form>
        <input type="text" value={cate.categoryName} />
        <input type="number" value={cate.appcommission} />
        <button>Send update</button>
      </form>
    </div>
  );
};

export default EditCategory;
