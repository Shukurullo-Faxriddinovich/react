import go from "../../assets/img/go-back.svg"
import "./go-back.scss";


const GoBack = ()=>{
  return(
    <div className="go-back-wrapper">
      <img className="go-back-img" src={go} alt="goback img"></img>
      <p className="go-back-text">Go Back</p>
    </div>
  );
}

export default GoBack;