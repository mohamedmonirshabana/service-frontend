import { useEffect, useState } from "react";

const AppInfo = () => {
  const token = localStorage.getItem("token");
  const [appdata, setAppData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/appinfo", {
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
        setAppData(data);
      });
  }, []);
  return (
    <div className="col-span-10 bg-white p-3 ">
      <div className=" bg-slate-100">
        <div className="flex flex-col">
          <div className="my-2 flex">
            <div>App Case :&nbsp;</div>
            <div>{appdata.app_money} &pound;</div>
          </div>
          <div className="my-2 flex">
            <div>App Tax :&nbsp;</div>
            <div>{appdata.app_tax} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
