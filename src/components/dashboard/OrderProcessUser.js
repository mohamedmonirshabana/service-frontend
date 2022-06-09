import { useEffect, useState } from "react";
import ProcessCard from "./ProcessCard";
const OrderProcessUser = () => {
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  const [processdata, setProcessdata] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/serviceprocess/user/${uid}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProcessdata(data);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3">
      {processdata.map((prodata) => (
        <ProcessCard
          key={prodata._id}
          processId={prodata._id}
          arivestate={prodata.arriveState}
          finishstate={prodata.finish_Status}
        />
      ))}
    </div>
  );
};

export default OrderProcessUser;
