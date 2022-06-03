import Coursal from "../../general/coursal/Coursal";
import Benifits from "../../general/Benifits/Benifits";
import Vision from "../../general/Vision/Vision";
import HomeService from "../../general/HomeService/HomeService";
import Mapdoc from "../../general/GoogleMap/Mapdoc";

const CollectPage = () => {
  return (
    <div>
      <Coursal />
      <Benifits />
      <Vision />
      <HomeService />
      <Mapdoc />
    </div>
  );
};

export default CollectPage;
