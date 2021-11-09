import Group41 from "./Group41";

function SmallNewClients2(props) {
  const { spanText, spanText2, graph, group41Props } = props;

  return (
    <div className="small-new-clients">
      <Group41 group41={group41Props.group41} icon={group41Props.icon} />
      <div className="overlap-group-2">
        <div className="label-2 dmsans-bold-wild-blue-yonder-16px">
          <span className="dmsans-bold-wild-blue-yonder-16px">{spanText}</span>
        </div>
        <div className="no-clients dmsans-bold-cloud-burst-18px">
          <span className="dmsans-bold-cloud-burst-18px">{spanText2}</span>
        </div>
        <img className="graph" src={graph} alt="graph" />
      </div>
    </div>
  );
}

export default SmallNewClients2;
