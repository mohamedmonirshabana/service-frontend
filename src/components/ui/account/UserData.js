import AccountD from "../../account/AccountD";
import UserDashBoarduser from "../userDashBoard/UserDashBoarduser";
import AdminDashBoardAdmin from "../AdminBoard/AdminDashBoardAdmin";
import ProviderDashBoardProvider from "../providerBoard/ProviderDashBoardprovider";
const UserData = () => {
  const role = localStorage.getItem("r");
  if (role === "user") {
    return (
      <UserDashBoarduser>
        <AccountD />
      </UserDashBoarduser>
    );
  } else if (role === "PROVIDER") {
    return (
      <ProviderDashBoardProvider>
        <AccountD />
      </ProviderDashBoardProvider>
    );
  } else if (role === "ADMIN") {
    return (
      <AdminDashBoardAdmin>
        <AccountD />
      </AdminDashBoardAdmin>
    );
  }
};

export default UserData;
