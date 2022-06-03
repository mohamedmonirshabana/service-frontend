import { Link } from "react-router-dom";
import LoginBy from "../../auth/LoginBy";
import SignUpForm from "../../auth/SignUpForm";
const AccountSignUp = () => {
  return (
    <section className="bg-white flex justify-around pb-6 px-6 pt-16">
      <section className="flex flex-col pt-6">
        <div className="font-bold flex justify-around pb-5">
          <Link to="/auth/signin">
            <h2 className="text-4xl ">Login</h2>
          </Link>
          <Link to="/auth/signup">
            <h2 className="text-4xl border-b-2 border-black">Sign Up</h2>
          </Link>
        </div>
        <SignUpForm />
      </section>
      <div className="flex flex-col pt-6 ">
        <LoginBy />
      </div>
    </section>
  );
};

export default AccountSignUp;
