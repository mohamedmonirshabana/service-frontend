import ProviderDashBoardProvider from "../../components/ui/providerBoard/ProviderDashBoardprovider";
import ProviderCase from "../../components/provider/ProviderCase";

const ProviderCasePage = () => {
  return (
    <div>
      <ProviderDashBoardProvider>
        <ProviderCase />
      </ProviderDashBoardProvider>
    </div>
  );
};

export default ProviderCasePage;
