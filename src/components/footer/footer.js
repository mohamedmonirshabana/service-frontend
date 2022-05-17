const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-6 flex flex-col">
      <div className="w-4/5 flex justify-between mx-auto mb-3">
        <section class="flex flex-col   pr-6  ">
          <div>
            <img src="img/logo.svg" alt="" />
          </div>
          <div class="text-white">Do all Service</div>
          <div class=" flex mt-2 ">
            <a href="#" class="mx-2">
              <img src="img/facebook-01.svg" alt="" class="h-7 w-7" />
            </a>
            <a href="#">
              <img src="img/twitter-01.svg" alt="" class="h-7 w-7" />
            </a>
          </div>
        </section>
        <section class="flex flex-col   pr-6  ">
          <h2 class="text-white text-xl font-bold">Info</h2>
          <div class="mt-2 flex flex-col text-white ">
            <div>
              <a href="#">Home</a>
            </div>
            <div>
              <a href="#">About us</a>
            </div>
            <div>
              <a href="#">Contact us</a>
            </div>
            <div>
              <a href="#">Feed back</a>
            </div>
            <div>
              <a href="#">Strategy</a>
            </div>
          </div>
        </section>
        <section class="flex flex-col pr-6 ">
          <h2 class="text-white text-xl font-bold">Support</h2>
          <div class="mt-2 flex flex-col text-white ">
            <div>
              <a href="#">Partner</a>
            </div>
            <div>
              <a href="#">Contect</a>
            </div>
            <div>
              <a href="#">Document</a>
            </div>
            <div>
              <a href="#">Career</a>
            </div>
          </div>
        </section>
        <section class="flex flex-col pr-6 ">
          <div class="">
            <input
              type="text"
              class="rounded-l-full p-3 px-5 pt-3 focus:outline-none"
              placeholder="Enter Email"
            />
            <button class="p-3 px-5 pt-3 text-blue-900 bg-white rounded-r-full -ml-2  self-baseline hover:bg-gray-400 mt-3 mx-auto">
              @Mail
            </button>
          </div>
        </section>
      </div>
      <div class="text-white pt-6 border-t-2 border-white pb-2">
        <h3 class="text-center text-md">Copyright &copy; 2022</h3>
      </div>
    </footer>
  );
};

export default Footer;
