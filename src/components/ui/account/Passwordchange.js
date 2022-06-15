import UpdatePassword from "../../account/UpdatePassword";
import UserDashBoarduser from "../userDashBoard/UserDashBoarduser";
import AdminDashBoardAdmin from "../AdminBoard/AdminDashBoardAdmin";
import ProviderDashBoardProvider from "../providerBoard/ProviderDashBoardprovider";
const Passwordchange = () => {
  const role = localStorage.getItem("r");
  if (role === "user") {
    return (
      <UserDashBoarduser>
        <UpdatePassword />
      </UserDashBoarduser>
    );
  } else if (role === "PROVIDER") {
    return (
      <ProviderDashBoardProvider>
        <UpdatePassword />
      </ProviderDashBoardProvider>
    );
  } else if (role === "ADMIN") {
    return (
      <AdminDashBoardAdmin>
        <UpdatePassword />
      </AdminDashBoardAdmin>
    );
  }
};

export default Passwordchange;
