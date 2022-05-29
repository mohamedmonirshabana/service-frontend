import { Link } from "react-router-dom";
import LoginBy from "../../auth/LoginBy";
import SignInForm from "../../auth/SignInForm";
const Account = (props) => {
  return (
    <section className="bg-white flex justify-around pb-6 px-6">
      <section className="flex flex-col pt-6">
        <div className="font-bold flex justify-around pb-5">
          <Link to="/auth/signin">
            <h2 className="text-4xl border-b-2 border-black">Login</h2>
          </Link>
          <Link to="/auth/signup">
            <h2 className="text-4xl">Sign Up</h2>
          </Link>
        </div>
        <SignInForm />
      </section>
      <div className="flex flex-col pt-6 ">
        <LoginBy />
      </div>
    </section>
  );
};

export default Account;
