import Valid from "./Valid";

function MediumChart(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    arrow_Drop_Up,
    spanText4,
    bar1,
    bar2,
    bar3,
    bar4,
    bar5,
    bar6,
    bar7,
    validProps,
  } = props;

  return (
    <div className="medium-chart">
      <div className="flex-row-3">
        <div className="flex-col-5">
          <div className="label-5 dmsans-medium-wild-blue-yonder-14px">
            <span className="dmsans-medium-wild-blue-yonder-14px">
              {spanText}
            </span>
          </div>
          <div className="cash-4 dmsans-bold-cloud-burst-34px">
            <span className="dmsans-bold-cloud-burst-34px">{spanText2}</span>
          </div>
          <div className="on-track">
            <Valid src={validProps.src} />
            <div className="on-track-1 valign-text-middle dmsans-bold-caribbean-green-16px">
              <span>
                <span className="dmsans-bold-caribbean-green-16px">
                  {spanText3}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="precentage">
          <img className="arrowdropup" src={arrow_Drop_Up} alt="arrowdropup" />
          <div className="text-1 dmsans-bold-caribbean-green-12px">
            <span className="dmsans-bold-caribbean-green-12px">
              {spanText4}
            </span>
          </div>
        </div>
      </div>
      <div className="group-50">
        <img className="bar-1-1" src={bar1} alt="bars" />
        <img className="bar-1" src={bar2} alt="bars" />
        <img className="bar-1" src={bar3} alt="bars" />
        <img className="bar-1" src={bar4} alt="bars" />
        <img className="bar-1" src={bar5} alt="bars" />
        <img className="bar-2" src={bar6} alt="bars" />
        <img className="bar-2" src={bar7} alt="bars" />
      </div>
    </div>
  );
}

export default MediumChart;
