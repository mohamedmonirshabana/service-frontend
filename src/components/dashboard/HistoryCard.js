const HistoryCard = (props) => {
  console.log(props.cdate);
  const mydate = new Date(props.cdate);
  const cyear = mydate.getFullYear();
  console.log(cyear);
  const cmonth = mydate.toLocaleString("en-US", { month: "2-digit" });
  const cday = mydate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="my-2 bg-slate-50  w-56 p-3 shadow-md rounded-md mx-3">
      <div className="text-l">Service Finished </div>
      <div className="text-xs">
        {cday}-{cmonth}-{cyear}
      </div>
      <div className="flex ">
        <div className="text-xl mr-2">Total Price :</div>
        <div className="text-xl">{props.totalprice} &pound;</div>
      </div>
    </div>
  );
};

export default HistoryCard;
