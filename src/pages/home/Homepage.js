import Header from "../../components/general/header/Header";
import Coursal from "../../components/general/coursal/Coursal";
import Benifits from "../../components/general/Benifits/Benifits";
import Vision from "../../components/general/Vision/Vision";
import HomeService from "../../components/general/HomeService/HomeService";
import Mapdoc from "../../components/general/GoogleMap/Mapdoc";
import Footer from "../../components/general/footer/footer";
const Homepage = () => {
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

export default Homepage;
