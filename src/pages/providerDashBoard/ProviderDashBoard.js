import ProviderDashBoardProvider from "../../components/ui/providerBoard/ProviderDashBoardprovider";
import ProviderBoard from "../../components/provider/PeoviderBoard";

const ProviderDashBoard = (props) => {
  return (
    <div>
      <ProviderDashBoardProvider>
        <ProviderBoard />
      </ProviderDashBoardProvider>
    </div>
  );
};

export default ProviderDashBoard;
