import { Link } from "react-router-dom";
const ServiceProviders = (props) => {
  // const Data = props.myData;
  console.log("my Data");
  // console.log(props.datacol);
  const myimg = props.image;
  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      <div className="flex">
        <div className="my-4 bg-blue-200 shadow-md rounded-lg px-3 py-4 flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex">
              <img
                src={props.image}
                alt={props.providername}
                className="w-10 h-10 rounded-full"
              />
              <h2 className="my-auto ml-1 font-bold">{props.providername}</h2>
            </div>
            <div className="my-auto">price: {props.providerprice}</div>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div className="flex">
              <img alt="" src="image/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="./image/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="./image/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="./image/star.svg" className="w-4 h-4 mx-2" />
              <img alt="" src="./image/star.svg" className="w-4 h-4 mx-2" />
            </div>
            <div>
              <Link to="#" className="underline">
                Comment-12
              </Link>
            </div>
          </div>
          <button className="mt-5 border py-3 rounded-lg hover:bg-white hover:shadow-md">
            Request service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;
