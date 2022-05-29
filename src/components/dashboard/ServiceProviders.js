import { Link } from "react-router-dom";
const ServiceProviders = (props) => {
  return (
    <div className="col-span-10 bg-white pt-3 px-5">
      <div className="flex">
        <div className="my-4 bg-blue-200 shadow-md rounded-lg px-3 py-4 flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex">
              <img
                alt=""
                className="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
              />
              <h2 className="my-auto ml-1 font-bold">{props.providername}</h2>
            </div>
            <div className="my-auto">price: 230</div>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div className="flex">
              <img alt="" src="./image/star.svg" className="w-4 h-4 mx-2" />
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
