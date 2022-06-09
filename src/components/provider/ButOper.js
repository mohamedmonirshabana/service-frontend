import { useNavigate } from "react-router-dom";
const ButOper = (props) => {
  console.log(props.serid);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const serviceid = props.serid;
  function paymentmeth(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/api/serviceprocess/payment/${serviceid}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      response.json();
      console.log(response.status);
      if (response.status === 201) {
      }
    });
  }
  function arrivemeth(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/api/serviceprocess/arraive/${serviceid}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      response.json();
      console.log(response.status);
      if (response.status === 201) {
      }
    });
  }
  function finishmeth(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/api/serviceprocess/finish/${serviceid}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      response.json();
      console.log(response.status);
      if (response.status === 201) {
        navigate("/providerdashboard/", { replace: true });
      }
    });
  }
  return (
    <div className="flex justify-around my-2">
      <button
        className="bg-red-800 p-3 rounded-xl shadow-lg text-white"
        onClick={paymentmeth}
      >
        Payment
      </button>
      <button
        className="bg-slate-800 text-white p-3 rounded-xl shadow-lg"
        onClick={arrivemeth}
      >
        Arrive
      </button>
      <button
        className="bg-red-800 text-white p-3 rounded-xl shadow-lg"
        onClick={finishmeth}
      >
        Finsih
      </button>
    </div>
  );
};

export default ButOper;
