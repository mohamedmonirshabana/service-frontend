import Footer from "../../general/footer/footer";
import Header from "../../general/header/Header";

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <div className="pt-16">{props.childresn}</div>
      <Footer />
    </div>
  );
};

export default HomePage;
