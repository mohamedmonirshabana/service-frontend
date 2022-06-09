import ProviderDashBoardProvider from "../../components/ui/providerBoard/ProviderDashBoardprovider";
import ProviderProcess from "../../components/provider/ProviderProcess";
import { useParams } from "react-router-dom";

const ClientInfo = () => {
  const { reqid } = useParams();
  console.log("Client");
  console.log(reqid);
  return (
    <div>
      <ProviderDashBoardProvider>
        <ProviderProcess />
      </ProviderDashBoardProvider>
    </div>
  );
};

export default ClientInfo;
