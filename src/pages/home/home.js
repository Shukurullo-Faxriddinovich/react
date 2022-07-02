import Container from "../../components/container/container";
import Mentor from "../../components/frontend-mentor/frontend-mentor";
import TypeFilter from "../../components/type-filter/type-filter";
import Roadmap from "../../components/roadmap/roadmap";
import { Link } from "react-router-dom"
import Header from "../../components/header/header";
import Body from "../../components/site-body/site-body"

import "./home.scss";

const Home = () => {
  return(
    <main className="home">
      <Container className="home_container">
        <div className="home-left">
          <Mentor />
          <TypeFilter />
          <Roadmap><Link to="/add-todo">link</Link></Roadmap>
        </div>
        <div className="home-right">
          <Header />
          <Body />
        </div>
        
      </Container>
    </main>
  );
};

export default Home; 