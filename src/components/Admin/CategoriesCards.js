import { Link } from "react-router-dom";

const CategoriesCards = (props) => {
  const url = `/admindashboard/catedit/${props.catid}`;
  return (
    <div className="bg-slate-50 rounded-md p-2 flex my-2">
      <div className="mx-2 border-r-2 px-2">{props.catname} </div>
      <div className="mx-2 border-r-2 px-2 ">{props.com}%</div>
      <Link
        to={url}
        className="text-blue-900 underline hover:text-black hover:no-underline"
      >
        Edit
      </Link>
    </div>
  );
};

export default CategoriesCards;
