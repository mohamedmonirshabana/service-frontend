import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AccountD = () => {
  let navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const photourl = useRef();

  const token = localStorage.getItem("token");
  const uid = localStorage.getItem("uid");
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/account/${uid}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);
  function updateData(event) {
    const lat = userdata.location.coordinates[0];
    const lng = userdata.location.coordinates[1];
    event.preventDefault();
    const myData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      lat: lat,
      lng: lng,
    };

    fetch(`http://localhost:8000/api/account/update/${uid}`, {
      method: "PATCH",
      body: JSON.stringify(myData),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        navigate("/userdashboard/", { replace: true });
      }
    });
  }

  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      <div className="flex flex-col pt-16">
        <form onSubmit={updateData}>
          <div className="flex my-3">
            <label htmlFor="username" className="mr-3 my-auto">
              User Name:
            </label>
            <input
              type="text"
              value={userdata.username}
              ref={usernameRef}
              className="bg-slate-200 p-3 rounded shadow"
            />
          </div>
          <div className="flex my-3">
            <label htmlFor="email" className="mr-3 my-auto">
              Email :
            </label>
            <input
              type="email"
              value={userdata.email}
              ref={emailRef}
              className="bg-slate-200 p-3 rounded shadow ml-9"
            />
          </div>
          <div className="flex my-3">
            <label htmlFor="phone" className="mr-3 my-auto">
              phone :
            </label>
            <input
              type="tel"
              value={userdata.phone}
              ref={phoneRef}
              className="bg-slate-200 p-3 rounded shadow ml-7"
            />
          </div>
          <div className="flex my-3">
            <label htmlFor="photo" className="mr-3 my-auto">
              photo :
            </label>
            <input
              type="url"
              value={userdata.profilepics}
              ref={photourl}
              className="bg-slate-200 p-3 rounded shadow ml-8"
            />
            <img
              src={userdata.profilepics}
              alt={userdata.username}
              className="h-8 w-8 rounded-full my-auto ml-3"
            />
          </div>
          <div className="flex my-3">
            <button className="bg-slate-800 text-white p-3 rounded-lg shadow-lg hover:bg-slate-900 ">
              Update Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountD;
