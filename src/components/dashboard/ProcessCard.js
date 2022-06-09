import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const ProcessCard = (props) => {
  let navigate = useNavigate();
  const ratenum = useRef();
  const comment = useRef();
  const token = localStorage.getItem("token");

  function sendComment(event) {
    event.preventDefault();
    const myData = {
      userComment: comment.current.value,
      userRating: ratenum.current.value,
    };
    fetch(
      `http://localhost:8000/api/serviceprocess/addrate/${props.processId}`,
      {
        method: "POST",
        body: JSON.stringify(myData),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      console.log(response.status);
      if (response.status >= 200) {
        navigate("/userdashboard/", { replace: true });
      }
      //   return response.json();
      //   console.log(response.status);
      //   if (response.status == 200) {
      //   }
    });
  }
  return (
    <div className="bg-slate-50 p-3 rounded-md shadow-md flex flex-col">
      <div className="flex">
        <div className="text-lg">Arrive : </div>
        <div className="text-lg ml-2">
          {props.arivestate ? "yes" : "Not yet"}
        </div>
      </div>
      <div className="flex">
        <div className="text-lg">Finish : </div>
        <div className="text-lg ml-2">
          {props.finishstate ? "Finish" : "Not Finish"}
        </div>
      </div>
      <div className="flex my-3">
        <div>Rate</div>
        <input
          type="number"
          min="1"
          max="5"
          defaultValue="1"
          className="rounded-md shadow-md border ml-2 w-20 px-2 py-1 focus:border-black focus:outline-none "
          ref={ratenum}
        />
      </div>
      <div className="flex my-3">
        <div>Comment</div>
        <input
          type="text"
          className="rounded-md shadow-md ml-2 p-2 border focus:border-black focus:outline-none"
          placeholder="Enter Your Comment"
          ref={comment}
        />
      </div>
      <button
        className="bg-slate-800 w-48 p-3 rounded-md shadow-md text-white hover:bg-slate-900 "
        onClick={sendComment}
      >
        Sned Comment
      </button>
    </div>
  );
};

export default ProcessCard;
