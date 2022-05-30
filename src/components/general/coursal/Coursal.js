const Coursal = () => {
  // const zIndex = ZIndex.setVar("Modal", 100);
  return (
    <section
      className=" w-full flex z-50"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className=" relative  ">
        <img
          src="./img/Coursal.png"
          alt=""
          className=" mx-auto w-4/5 z-50 relative "
          style={{ zIndex: 10, position: "relative" }}
        />
      </div>
      <div className="absolute top-72  left-2/4  text-center  z-20   ">
        <h1 className="text-white text-5xl w-auto font-bold">
          All Service You Need
        </h1>
        <h1 className="text-5xl text-blue-900 font-bold"> In a One Place</h1>
      </div>
    </section>
  );
};

export default Coursal;
