import DashBoardHeaderUi from "../userDashBoard/DashBoardHeaderUi";
import SideMenu from "../../dashboard/SideMenu";

const AdminDashBoardAdmin = (props) => {
  return (
    <div>
      <DashBoardHeaderUi />
      <main className="w-full grid grid-cols-12 gap-4 bg-slate-100 absolute mt-16">
        <SideMenu role="admin" />
        {props.children}
      </main>
    </div>
  );
};

export default AdminDashBoardAdmin;
