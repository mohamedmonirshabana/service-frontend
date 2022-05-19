import Header from "../header/Header";
import Coursal from "../coursal/Coursal";
import Benifits from "../Benifits/Benifits";
import Vision from "../Vision/Vision";
import HomeService from "../HomeService/HomeService";
import Mapdoc from "../GoogleMap/Mapdoc";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Coursal />
      <Benifits />
      <Vision />
      <HomeService />
      <Mapdoc />
      <Footer />
    </div>
  );
};

export default Home;
