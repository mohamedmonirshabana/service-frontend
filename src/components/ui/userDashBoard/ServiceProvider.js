import ServiceProviders from "../../dashboard/ServiceProviders";
import { useEffect, useState } from "react";
const ServiceProvider = (props) => {
  const [providerdata, setProviderData] = useState([]);
  const serviceID = props.pram;
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/serviceprovider/getallprovider/${serviceID}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProviderData(data);
        // console.log("send Data");
        // console.log(providerdata);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      {providerdata.map((da) => (
        <ServiceProviders
          key={da._id}
          image={da.user_id.profilepics}
          providername={da.user_id.username}
          providerprice={da.serviceprice}
          servicerproviderid={da.user_id._id}
        />
      ))}
    </div>
  );
};

export default ServiceProvider;
