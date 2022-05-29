import { Link } from "react-router-dom";
const LoginBy = () => {
  return (
    <div>
      <h1 className="text-4xl">Login by </h1>
      <div className=" flex flex-col mt-20 ">
        <Link
          to="#"
          className="p-3 px-6 pt-2 w-72 my-5 rounded-full self-baseline bg-white hover:bg-slate-100 drop-shadow-md border-2 border-gray-700 text-facebook font-semibold flex"
        >
          <img src="../img/facebook-logo-01.svg" alt="" className="w-4 mr-2" />
          FaceBook
        </Link>
        <Link
          to="#"
          className="p-3 px-6 pt-2 w-72 my-5 rounded-full self-baseline bg-white hover:bg-slate-100 drop-shadow-md border-2 border-gray-700 text-twitter font-semibold flex"
        >
          <img src="../img/twitter-logo-01.svg" alt="" className="w-4 mr-2" />
          Twitter
        </Link>
        <Link
          to="#"
          className="p-3 px-6 pt-2 w-72 my-5 rounded-full self-baseline bg-white hover:bg-slate-100 drop-shadow-md border-2 border-gray-700 text-slate-800 font-semibold flex"
        >
          <img src="../img/google-logo-01.svg" alt="" className="w-4 mr-2" />
          Google
        </Link>
      </div>
    </div>
  );
};

export default LoginBy;
