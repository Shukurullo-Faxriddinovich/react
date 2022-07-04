import comment from "../../assets/img/comment-img.svg";
import Feadback from "../site-body-feadback-btn/site-body-feadback";
import TypeBadge from "../type-badge/type-badge";
import top from "../../assets/img/^.svg";
import "./site-body.scss"
import Data from "../../data";


const Body = () => {
  return(
    <div>

      <div className="body-card-wrapper">
        <Feadback className="feadback-card">
          <img className="feadback-img" src={top} alt="img"></img>
          <number className="feadback-number">112</number>
        </Feadback>

        <div className="body-sub-wrapper">
          <h3 className="body-title">Add tags for solutions</h3>
          <p className="body-text">Easier to search for solutions based on a specific stack.</p>
          <TypeBadge>Enhancement</TypeBadge>
        </div>

        <div className="comment-wrapper">
          <img className="comment-img" src={comment} alt="comment img"></img>
          <number className="comment-number">2</number>
        </div>
      </div>


      <div className="body-card-wrapper">
        <Feadback className="feadback-card">
          <img className="feadback-img" src={top} alt="img"></img>
          <number className="feadback-number">99</number>
        </Feadback>

        <div className="body-sub-wrapper">
          <h3 className="body-title">Add a dark theme option</h3>
          <p className="body-text">It would help people with light sensitivities and who prefer dark mode.</p>
          <TypeBadge>Feature</TypeBadge>
        </div>

        <div className="comment-wrapper">
          <img className="comment-img" src={comment} alt="comment img"></img>
          <number className="comment-number">4</number>
        </div>
      </div>


      <div className="body-card-wrapper">
        <Feadback className="feadback-card">
          <img className="feadback-img" src={top} alt="img"></img>
          <number className="feadback-number">65</number>
        </Feadback>

        <div className="body-sub-wrapper">
          <h3 className="body-title">Q&A within the challenge hubs</h3>
          <p className="body-text">Challenge-specific Q&A would make for easy reference.</p>
          <TypeBadge>Feature</TypeBadge>
        </div>

        <div className="comment-wrapper">
          <img className="comment-img" src={comment} alt="comment img"></img>
          <number className="comment-number">1</number>
        </div>
      </div>


      <div className="body-card-wrapper">
        <Feadback className="feadback-card">
          <img className="feadback-img" src={top} alt="img"></img>
          <number className="feadback-number">51</number>
        </Feadback>

        <div className="body-sub-wrapper">
          <h3 className="body-title">Allow image/video upload to feedback</h3>
          <p className="body-text">Images and screencasts can enhance comments on solutions.</p>
          <TypeBadge>Enhancement</TypeBadge>
        </div>

        <div className="comment-wrapper">
          <img className="comment-img" src={comment} alt="comment img"></img>
          <number className="comment-number">2</number>
        </div>
      </div>


      <div className="body-card-wrapper">
        <Feadback className="feadback-card">
          <img className="feadback-img" src={top} alt="img"></img>
          <number className="feadback-number">42</number>
        </Feadback>

        <div className="body-sub-wrapper">
          <h3 className="body-title">Ability to follow others</h3>
          <p className="body-text">Stay updated on comments and solutions other people post.</p>
          <TypeBadge>Feature</TypeBadge>
        </div>

        <div className="comment-wrapper">
          <img className="comment-img" src={comment} alt="comment img"></img>
          <number className="comment-number">3</number>
        </div>
      </div>


      <div className="body-card-wrapper">
        <Feadback className="feadback-card">
          <img className="feadback-img" src={top} alt="img"></img>
          <number className="feadback-number">3</number>
        </Feadback>

        <div className="body-sub-wrapper">
          <h3 className="body-title">Preview images not loading</h3>
          <p className="body-text">Challenge preview images are missing when you apply a filter.</p>
          <TypeBadge>Bug</TypeBadge>
        </div>

        <div className="comment-wrapper">
          <img className="comment-img" src={comment} alt="comment img"></img>
          <number className="comment-number6">0</number>
        </div>
      </div>

    </div>
  )
}
export default Body;