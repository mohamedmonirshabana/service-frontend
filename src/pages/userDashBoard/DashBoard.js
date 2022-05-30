import UserDashBoarduser from "../../components/ui/userDashBoard/UserDashBoarduser";
import MainBoard from "../../components/dashboard/MainBoard";
const UserDashBoard = (props) => {
  return (
    <div>
      <UserDashBoarduser>
        <MainBoard />
      </UserDashBoarduser>
    </div>
  );
};

export default UserDashBoard;
