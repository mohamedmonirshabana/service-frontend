import AdminDashBoardAdmin from "../../components/ui/AdminBoard/AdminDashBoardAdmin";
import GeneralDashBoard from "../../components/Admin/GeneralDashBoard";
const MainAdminDashBoard = () => {
  return (
    <div>
      <AdminDashBoardAdmin>
        <GeneralDashBoard />
      </AdminDashBoardAdmin>
    </div>
  );
};

export default MainAdminDashBoard;
