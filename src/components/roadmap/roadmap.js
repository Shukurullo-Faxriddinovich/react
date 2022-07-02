import "./roadmap.scss";


const Roadmap = () =>{
  return(
    <div className="roadmap-wraper">
      <div className="roadmap-header">
        <h2 className="roadmap-title">Roadmap</h2>
        <a className="roadmap-link" href="">View</a>
      </div>
      <div className="roadmap-body">
        <span className="roadmap-span1"></span>
        <p className="roadmap-text1">Planned</p>
        <span  className="roadmap-sub-span">2</span>
      </div>
      <div className="roadmap-body">
        <span className="roadmap-span2"></span>
        <p className="roadmap-text2">In-Progress</p>
        <span  className="roadmap-sub-span">3</span>
      </div>
      <div className="roadmap-body">
        <span className="roadmap-span3"></span>
        <p className="roadmap-text3">Live</p>
        <span  className="roadmap-sub-span">1</span>
      </div>
    </div>
  );
}

export default Roadmap;