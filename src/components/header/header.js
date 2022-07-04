import "./header.scss";

import vector from "../../assets/img/Vector.svg" 
import top from "../../assets/img/select-top.svg"

import AddBtn from "../add-btn/add-btn";

const Header = () =>{
  return(
    <div className="header-wrapper">
      <img className="header-img" src={vector} alt="vector logo"></img>
      <h2 className="header-title">6 Suggestions</h2>
      <div className="select-wrapper">
        <p className="header-text">Sort by : Most Upvotes</p>
        <select className="header-select">
          <img className="select-top-img" src={top}></img>
          <option className="header-option">Most Upvotes</option>  
          <option className="header-option">Least Upvotes</option>  
          <option className="header-option">Most Comments</option>  
          <option className="header-option">Least Comments</option>  
        </select>  
      </div>
       <AddBtn to="/new-feadback">+ Add Feedback</AddBtn>
    </div>
  )
}

export default Header;