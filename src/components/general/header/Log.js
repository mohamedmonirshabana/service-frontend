import { Link } from "react-router-dom";

const Log = () => {
  return (
    <div>
      <Link to="/auth/signin" className="ml-2">
        Login
      </Link>
      <Link to="/auth/signup" className="mr-2">
        Register
      </Link>
    </div>
  );
};

export default Log;
