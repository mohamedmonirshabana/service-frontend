const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-6 flex flex-col">
      <div className="w-4/5 flex justify-between mx-auto mb-3">
        <section className="flex flex-col   pr-6  ">
          <div>
            <img src="../img/logo.svg" alt="" />
          </div>
          <div className="text-white">Do all Service</div>
          <div className=" flex mt-2 ">
            <button className="mx-2">
              <img src="../img/facebook-01.svg" alt="" className="h-7 w-7" />
            </button>
            <button>
              <img src="../img/twitter-01.svg" alt="" className="h-7 w-7" />
            </button>
          </div>
        </section>
        <section className="flex flex-col   pr-6  ">
          <h2 className="text-white text-xl font-bold">Info</h2>
          <div className="mt-2 flex flex-col text-white ">
            <div>
              <button>Home</button>
            </div>
            <div>
              <button>About us</button>
            </div>
            <div>
              <button>Contact us</button>
            </div>
            <div>
              <button>Feed back</button>
            </div>
            <div>
              <button>Strategy</button>
            </div>
          </div>
        </section>
        <section className="flex flex-col pr-6 ">
          <h2 className="text-white text-xl font-bold">Support</h2>
          <div className="mt-2 flex flex-col text-white ">
            <div>
              <button>Partner</button>
            </div>
            <div>
              <button>Contect</button>
            </div>
            <div>
              <button>Document</button>
            </div>
            <div>
              <button>Career</button>
            </div>
          </div>
        </section>
        <section className="flex flex-col pr-6 ">
          <div className="">
            <input
              type="text"
              className="rounded-l-full p-3 px-5 pt-3 focus:outline-none"
              placeholder="Enter Email"
            />
            <button className="p-3 px-5 pt-3 text-blue-900 bg-white rounded-r-full -ml-2  self-baseline hover:bg-gray-400 mt-3 mx-auto">
              @Mail
            </button>
          </div>
        </section>
      </div>
      <div className="text-white pt-6 border-t-2 border-white pb-2">
        <h3 className="text-center text-md">Copyright &copy; 2022</h3>
      </div>
    </footer>
  );
};

export default Footer;
