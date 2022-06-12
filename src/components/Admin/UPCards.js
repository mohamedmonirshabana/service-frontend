const UPCards = (props) => {
  const myDate = new Date(props.cdate);
  const cyear = myDate.getFullYear();
  const cmonth = myDate.toLocaleString("en-US", { month: "2-digit" });
  const cday = myDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="bg-slate-50 p-3 rounded-md shadow-md my-2 flex flex-col mx-3">
      <div className="flex p-2">
        <div className="my-auto">
          <img
            src={props.pic}
            alt={props.username}
            className="w-6 h-6 rounded-full mr-2"
          />
        </div>
        <div className="text-lg font-bold my-auto">{props.username}</div>
      </div>
      <div className="flex p-2">
        <div>Phone :</div>
        <div className="ml-2">{props.mobile}</div>
      </div>
      <div className="flex p-2 border-t-2">
        <div className="mr-2 ">Create Account : </div>
        <div>
          {cyear}-{cmonth}- {cday}
        </div>
        {/* <button className="bg-green-800 p-2 text-white rounded-lg mx-2">
          Active
        </button>
        <button className="bg-red-800 p-2 text-white rounded-lg mx-2">
          Freez
        </button> */}
      </div>
    </div>
  );
};

export default UPCards;
