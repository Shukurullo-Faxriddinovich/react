import { Link } from "react-router-dom";
import "./add-btn.scss";

const AddBtn = ({ to, children }) =>{
  if (to){
    return <Link className="add-btn" to={to}></Link>
  }

  return (
    <button className="add-btn">{children}</button>
  )
};

export default AddBtn;