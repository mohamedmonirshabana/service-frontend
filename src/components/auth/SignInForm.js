import { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const SignInForm = () => {
  const mailData = useRef();
  const passData = useRef();
  const [resData, setResData] = useState("");
  let navigate = useNavigate();
  function submitFormHandler(event) {
    event.preventDefault();
    const userEmail = mailData.current.value;
    const userPass = passData.current.value;
    const sendData = {
      email: userEmail,
      password: userPass,
    };
    fetch("http://localhost:8000/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("uid", data.id);
        if (data.role === "user") {
          console.log("Done user");
          navigate("/userdashboard/", { replace: true });
        }
      });
    // return <Navigate to="/userdashboard/" replace={true} />;
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="flex flex-col justify-between  pt-6 px-16">
        <div className="my-4 flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your Email"
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
            ref={mailData}
          />
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter your Password"
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
            ref={passData}
          />
        </div>
        <div className="my-4 pl-11">
          <div className="flex items-center w-full mb-12">
            {/* <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input type="checkbox" id="toogleA" className="st-only" />
                <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-gray-400 rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">Remember me</div>
            </label> */}
          </div>
        </div>
        <div className="flex justify-between px-5">
          <button className="p-3 px-6 pt-2 text-white bg-blue-900 rounded-full self-baseline hover:bg-blue-800 mt-3 mx-auto">
            Log in
          </button>
          <Link
            to="/"
            className="p-3 px-6 pt-2 text-sky-900  rounded-full self-baseline  mt-3 mx-auto"
          >
            Forget Password
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
