import AdminDashBoardAdmin from "../../components/ui/AdminBoard/AdminDashBoardAdmin";
import EditServiceAdmin from "../../components/dashboard/EditServiceAdmin";
import { useParams } from "react-router-dom";
const EditService = () => {
  const { servid } = useParams();
  return (
    <div>
      <AdminDashBoardAdmin>
        <EditServiceAdmin servID={servid} />
      </AdminDashBoardAdmin>
    </div>
  );
};

export default EditService;

//props.servID;
