import UserDashBoarduser from "../../components/ui/userDashBoard/UserDashBoarduser";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceProvider from "../../components/ui/userDashBoard/ServiceProvider";
const ServiceProviderBoard = (props) => {
  const [serviceproviderdata, setServiceProviderData] = useState([]);
  const params = useParams();
  const { serviceid } = params;
  console.log(params);
  return (
    <div>
      <UserDashBoarduser>
        <ServiceProvider pram={serviceid} />
      </UserDashBoarduser>
    </div>
  );
};

export default ServiceProviderBoard;
