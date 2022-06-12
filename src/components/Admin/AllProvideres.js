import { useEffect, useState } from "react";
import UPCards from "./UPCards";
const AllProvideres = () => {
  const token = localStorage.getItem("token");
  const [allusers, setAllusers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/account/getalluseres/PROVIDER", {
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
        setAllusers(data);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3 flex flex-col">
      <div className="text-xl">Provideres</div>
      <div className="flex">
        {allusers.map((usrdata) => (
          <UPCards
            key={usrdata._id}
            username={usrdata.username}
            pic={usrdata.profilepics}
            mobile={usrdata.phone}
            cdate={usrdata.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProvideres;
