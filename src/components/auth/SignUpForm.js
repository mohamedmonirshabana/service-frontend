import { useState, useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";

const SignUpForm = () => {
  const [confirmpass, setConfirmPass] = useState(false);

  const usernameData = useRef();
  const passwordData = useRef();
  const confirmpassData = useRef();
  const emailData = useRef();
  const mobileData = useRef();
  const picData = useRef();
  let lat = 0;
  let lng = 0;

  function componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    });
  }

  function Checkpass() {
    const pass = passwordData.current.value;
    const confirmpass = confirmpassData.current.value;
    if (pass !== confirmpass) {
      setConfirmPass(true);
    } else {
      setConfirmPass(false);
    }
  }

  function submitRegisterHandler(event) {
    event.preventDefault();
    componentDidMount();
    const username = usernameData.current.value;
    const password = passwordData.current.value;
    const email = emailData.current.value;
    const phone = mobileData.current.value;
    const photo = picData.current.value;
    const userData = {
      username: username,
      password: password,
      email: email,
      phone: phone,
      profilepics: photo,
      lat: lat,
      lng: lng,
    };
    fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <form onSubmit={submitRegisterHandler}>
      <div className="flex flex-col justify-between pt-6 px-16">
        <div className="my-4 flex flex-col">
          <label htmlFor="username">user Name:</label>
          <input
            type="text"
            id="username"
            required
            placeholder="user name"
            ref={usernameData}
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            placeholder="email"
            ref={emailData}
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordData}
            required
            placeholder="Password"
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
          />
          {confirmpass ? (
            <div className=" bg-red-500 text-white text-lg ">
              Password have to Confirm
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="confirmpass">Confirm Password:</label>
          <input
            type="password"
            id="confirmpass"
            ref={confirmpassData}
            required
            placeholder="Confirm Password"
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
          />
          {confirmpass ? (
            <div className=" bg-red-500 text-white text-lg ">
              Password have to Confirm
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="phone">Mobile:</label>
          <input
            type="tel"
            id="phone"
            ref={mobileData}
            required
            placeholder="Mobile Number"
            onFocus={Checkpass}
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
          />
        </div>
        <div className="my-4 flex flex-col">
          <label htmlFor="photo">Photo Url:</label>
          <input
            type="url"
            id="photo"
            ref={picData}
            required
            placeholder="http://"
            className="rounded-md p-2 focus:outline-none bg-slate-100 drop-shadow"
          />
        </div>
        <div>
          <button className="px-5 py-3 bg-sky-800 text-white rounded-xl shadow-md">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
