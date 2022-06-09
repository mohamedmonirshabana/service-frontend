import DashBoardHeaderUi from "../userDashBoard/DashBoardHeaderUi";
import SideMenu from "../../dashboard/SideMenu";
import ProviderBoard from "../../provider/PeoviderBoard";
import { propTypes } from "react-z-index";

const ProviderDashBoardProvider = (props) => {
  return (
    <div>
      <DashBoardHeaderUi />
      <main className="w-full grid grid-cols-12 gap-4 bg-slate-100  pt-16">
        <SideMenu role="provider" />
        {props.children}
      </main>
    </div>
  );
};

export default ProviderDashBoardProvider;
