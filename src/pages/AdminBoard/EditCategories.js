import AdminDashBoardAdmin from "../../components/ui/AdminBoard/AdminDashBoardAdmin";
import EditCategory from "../../components/Admin/EditCategories";
import { useParams } from "react-router-dom";
const EditCategories = () => {
  const { catid } = useParams();
  console.log(catid);
  return (
    <div>
      <AdminDashBoardAdmin>
        <EditCategory catID={catid} />
      </AdminDashBoardAdmin>
    </div>
  );
};

export default EditCategories;
