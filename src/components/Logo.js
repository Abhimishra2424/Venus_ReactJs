
function Logo(props) {
    const { group51, spanText, spanText2 } = props;
  
    return (
      <div className="logo">
        <div className="icon-1">
          <img className="group-51" src={group51} alt="group"/>
        </div>
        <div className="text">
          <div className="place poppins-bold-canary-26px">
            <span className="poppins-bold-canary-26px">{spanText}</span>
          </div>
          <div className="dashboard-2 poppins-medium-canary-12px">
            <span className="poppins-medium-canary-12px">{spanText2}</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Logo;