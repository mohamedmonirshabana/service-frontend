const HomeService = () => {
  return (
    <section className="mt-7 w-4/5 flex justify-between mx-auto  p-7">
      <div className="w-1/2 flex flex-col">
        <div className="w-full flex">
          <div className="m-2 bg-white p-5 h-36 shadow-md">
            <img src="img/HomeTools-01.svg" className="h-32 w-32" alt="" />
          </div>
          <div className="m-2 bg-white p-5 h-36 shadow-md">
            <img src="img/electric-01.svg" alt="" className="h-32 w-32" />
          </div>
          <div className="m-2 bg-white p-5 h-36 shadow-md">
            <img src="img/fix-01.svg" alt="" className="h-32 w-32" />
          </div>
        </div>
        <div className="w-full flex">
          <div className="m-2 bg-white p-5 h-36 shadow-md">
            <img src="img/Document-01.svg" alt="" className="h-32 w-32" />
          </div>
          <div className="m-2 bg-white p-5 h-36 shadow-md">
            <img src="img/Dliver-01.svg" alt="" className="h-32 w-32" />
          </div>
          <div className="m-2 bg-white p-5 h-36 shadow-md">
            <img src="img/Pointer-01.svg" alt="" className="h-32 w-32" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col  py-14 text-sky-900 ">
        <h1 className="text-center text-4xl font-bold">Title</h1>
        <p className="text-center mt-6 px-6">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button className="p-3 px-6 pt-2 text-white bg-blue-900 rounded-full self-baseline hover:bg-blue-800 mt-3 mx-auto">
          For More info
        </button>
      </div>
    </section>
  );
};

export default HomeService;
