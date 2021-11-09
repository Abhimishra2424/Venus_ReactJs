function SmallChart(props) {
  const { spanText, spanText2, bar3, bar4, bar5, bar6, bar7 } = props;

  return (
    <div className="small-chart">
      <div className="flex-col-3">
        <div className="label-1 dmsans-medium-wild-blue-yonder-14px">
          <span className="dmsans-medium-wild-blue-yonder-14px">
            {spanText}
          </span>
        </div>
        <div className="cash-1 dmsans-bold-cloud-burst-24px">
          <span className="dmsans-bold-cloud-burst-24px">{spanText2}</span>
        </div>
      </div>
      <img className="bar-3" src={bar3} alt="bars" />
      <img className="bar" src={bar4} alt="bars" />
      <img className="bar" src={bar5} alt="bars" />
      <img className="bar" src={bar6} alt="bars" />
      <img className="bar" src={bar7} alt="bars" />
    </div>
  );
}

export default SmallChart;
