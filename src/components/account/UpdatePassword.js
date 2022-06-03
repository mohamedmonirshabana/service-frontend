import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const UpdatePassword = () => {
  let navigate = useNavigate();
  const oldpassword = useRef();
  const newpassword = useRef();
  const confirmpassword = useRef();
  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  function updatePassword(event) {
    event.preventDefault();
    const myData = {
      oldPassword: oldpassword.current.value,
      newpassword: newpassword.current.value,
      confirmPassword: confirmpassword.current.value,
    };
    console.log(oldpassword.current.value);

    fetch(`http://localhost:8000/api/account/changepassword/${uid}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(myData),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        navigate("/userdashboard/", { replace: true });
      }
    });
  }
  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      <form onSubmit={updatePassword}>
        <div className="flex flex-col">
          <div className="flex my-3">
            <label htmlFor="password" className="my-auto">
              Old Password :
            </label>
            <input
              type="password"
              placeholder="Enter old password"
              className="p-3 rounded-md bg-slate-200 ml-10"
              id="password"
              ref={oldpassword}
            />
          </div>
          <div className="flex my-3">
            <label htmlFor="newpassword" className="my-auto">
              New Password :
            </label>
            <input
              type="password"
              placeholder="Enter old password"
              id="newpassword"
              className="p-3 rounded-md bg-slate-200 ml-9"
              ref={newpassword}
            />
          </div>
          <div className="flex my-3">
            <label htmlFor="confirm" className="my-auto">
              confirm Password :
            </label>
            <input
              type="password"
              placeholder="Enter old password"
              id="confirm"
              className="p-3 rounded-md bg-slate-200 ml-3"
              ref={confirmpassword}
            />
          </div>
          <div className="flex my-3">
            <button
              type="submit"
              className="bg-slate-800 p-3 text-white rounded-md shadow-lg hover:bg-slate-900"
            >
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
