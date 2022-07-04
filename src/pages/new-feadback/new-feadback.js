import Container from "../../components/container/container";
import GoBack from "../../components/go-back/go-back";
import AddBtn from "../../components/add-btn/add-btn";
import plus from "../../assets/img/+.svg"
import "./new-feadback.scss";


const NewFeadback = () => {
  return(
    <div className="new-feadback-wrapper">
      <Container className="new-feadback-container">
        <GoBack />
        
        <form className="new-feadback-form">
          <div className="img-wrapper">
            <img className="img" src={plus} alt=""></img>
          </div>
          <h2 className="new-feadback-title">Create New Feedback</h2>
          <h3 className="new-feadback-sub-title">Feedback Title</h3>
          <p className="new-feadback-sub-text">Add a short, descriptive headline</p>
          <input className="new-feadback-input" ></input>

          <h3 className="new-feadback-sub-title">Category</h3>
          <p className="new-feadback-sub-text">Choose a category for your feedback</p>
          <select className="new-feadback-select">
            <option className="new-feadback-option">Feature</option>
            <option className="new-feadback-option">UI</option>
            <option className="new-feadback-option">UX</option>
            <option className="new-feadback-option">Enhancement</option>
            <option className="new-feadback-option">Bug</option>
          </select>
          

          <h3 className="new-feadback-sub-title">Feedback Detail</h3>
          <p className="new-feadback-sub-text">Include any specific comments on what should be improved, added, etc.</p>
          <input className="new-feadback-sub-input"></input>

          <div className="btn-wrapper">
            <button className="new-feadback-btn">Cancel</button>
            <AddBtn>+ Add Feedback</AddBtn>
          </div>
        </form>
      </Container>

    </div>
  );
}

export default NewFeadback;