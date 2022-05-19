import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  let navgate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const { data } = await axios.post(
      "http://localhost:8000/api/auth/signin",
      form
    );
    if (data.status === parseInt("401")) {
      setErrorMessage(data.response);
    } else {
      localStorage.setItem("token", data.token);
      //   setIsLoggedIn(true);
      navgate("/home");
    }
  };
  return (
    <section className=" bg-white flex justify-around  pb-6 ">
      <section className="flex flex-col pt-6 ">
        <div className="font-bold flex justify-around  pb-5 ">
          <a href="#">
            <h2 className="text-4xl border-b-2 border-black ">Login</h2>
          </a>
          <a href="#">
            <h2 className="text-4xl">Sign up</h2>
          </a>
        </div>
        <form action="">
          <div className="flex flex-col justify-between  pt-6 px-16">
            <div className="my-4 flex flex-col">
              <label for="emial">Email</label>
              <input
                type="email"
                name="email"
                id="emial"
                placeholder="Enter your Email"
                className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter you Rpassword"
                className="rounded-md p-2  focus:outline-none bg-slate-100 drop-shadow"
              />
            </div>
            <div className="my-4 pl-11">
              <div className="flex items-center  w-full mb-12">
                <label
                  for="toogleA"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input id="toogleA" type="checkbox" className="sr-only" />

                    <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner"></div>

                    <div className="dot absolute w-6 h-6 bg-gray-400 rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>

                  <div className="ml-3 text-gray-700 font-medium">
                    Remeber me
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-between px-5">
              <button
                type="submit"
                className="p-3 px-6 pt-2 text-white bg-blue-900 rounded-full self-baseline hover:bg-blue-800 mt-3 mx-auto"
              >
                Login
              </button>
              <a
                href="#"
                className="p-3 px-6 pt-2 text-sky-900  rounded-full self-baseline  mt-3 mx-auto"
              >
                Forget your password
              </a>
            </div>
          </div>
        </form>
      </section>
      <div className="flex flex-col pt-6 ">
        <h1 className="text-4xl">Login by </h1>
        <div className=" flex flex-col mt-20 ">
          <a
            href="#"
            className="p-3 px-6 pt-2 w-72 my-5 rounded-full self-baseline bg-white hover:bg-slate-100 drop-shadow-md border-2 border-gray-700 text-facebook font-semibold flex"
          >
            <img src="../img/facebook-logo-01.svg" className="w-4 mr-2" />
            FaceBook
          </a>
          <a
            href="#"
            className="p-3 px-6 pt-2 w-72 my-5 rounded-full self-baseline bg-white hover:bg-slate-100 drop-shadow-md border-2 border-gray-700 text-twitter font-semibold flex"
          >
            <img src="../img/twitter-logo-01.svg" className="w-4 mr-2" />
            Twitter
          </a>
          <a
            href="#"
            className="p-3 px-6 pt-2 w-72 my-5 rounded-full self-baseline bg-white hover:bg-slate-100 drop-shadow-md border-2 border-gray-700 text-slate-800 font-semibold flex"
          >
            <img src="../img/google-logo-01.svg" alt="" className="w-4 mr-2" />
            Google
          </a>
        </div>
      </div>
      <section></section>
    </section>
  );
};

export default SignIn;
