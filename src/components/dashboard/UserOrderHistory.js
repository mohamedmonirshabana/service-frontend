import { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";

const UserOrderHistory = (props) => {
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/serviceprocess/userhistory/${uid}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        setOrderHistory(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3">
      <div className="flex flex-col">
        {orderHistory.map((historydata) => (
          <HistoryCard
            key={historydata._id}
            cdate={historydata.createdAt}
            totalprice={historydata.total_price}
          />
        ))}
      </div>
    </div>
  );
};

export default UserOrderHistory;
