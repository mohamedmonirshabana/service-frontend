import { Link } from "react-router-dom";

const Log = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Link to="/auth/signin" className="mx-3">
          Login
        </Link>
      </div>
      |
      <div>
        <Link to="/auth/signup" className="mx-3">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Log;
