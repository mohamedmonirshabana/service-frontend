import UserDashBoarduser from "../../components/ui/userDashBoard/UserDashBoarduser";
import UserOrderHistory from "../../components/dashboard/UserOrderHistory";
const HistoryOrder = () => {
  return (
    <div>
      <UserDashBoarduser>
        <UserOrderHistory />
      </UserDashBoarduser>
    </div>
  );
};

export default HistoryOrder;
