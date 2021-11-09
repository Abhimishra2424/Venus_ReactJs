import Logo from "./Logo";
import Frame17 from "./Frame17";

function SideBar2(props) {
  const {
    line16,
    icon,
    spanText,
    icon2,
    spanText2,
    logoProps,
    frame17Props,
    frame172Props,
    frame173Props,
    frame174Props,
    frame175Props,
    frame176Props,
  } = props;

  return (
    <div className="side-bar-2">
      <Logo
        group51={logoProps.group51}
        spanText={logoProps.spanText}
        spanText2={logoProps.spanText2}
      />
      <img className="line-16" src={line16} />
      <div className="frame-18">
        <div className="frame-16">
          <img className="icon" src={icon} />
          <div className="dashboard dmsans-bold-white-16px">
            <span className="dmsans-bold-white-16px">{spanText}</span>
          </div>
        </div>
        <Frame17 icon={frame17Props.icon} spanText={frame17Props.spanText} />
        <Frame17
          icon={frame172Props.icon}
          spanText={frame172Props.spanText}
          className={frame172Props.className}
        />
        <Frame17
          icon={frame173Props.icon}
          spanText={frame173Props.spanText}
          className={frame173Props.className}
        />
        <Frame17
          icon={frame174Props.icon}
          spanText={frame174Props.spanText}
          className={frame174Props.className}
        />
        <Frame17
          icon={frame175Props.icon}
          spanText={frame175Props.spanText}
          className={frame175Props.className}
        />
        <Frame17
          icon={frame176Props.icon}
          spanText={frame176Props.spanText}
          className={frame176Props.className}
        />
      </div>
      <div className="frame-23">
        <img className="icon" src={icon2} />
        <div className="log-out dmsans-medium-wild-blue-yonder-16px">
          <span className="dmsans-medium-wild-blue-yonder-16px">
            {spanText2}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar2;
