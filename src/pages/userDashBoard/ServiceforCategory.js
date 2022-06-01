import UserDashBoarduser from "../../components/ui/userDashBoard/UserDashBoarduser";
import ProviderService from "../../components/dashboard/ProviderService";
import { useParams } from "react-router-dom";

const ServiceforCategory = () => {
  const params = useParams();
  const { categoryid } = params;
  return (
    <div>
      <UserDashBoarduser>
        <ProviderService pram={categoryid} />
      </UserDashBoarduser>
    </div>
  );
};

export default ServiceforCategory;
