function SmallActivity(props) {
  const { spanText, spanText2, chart } = props;

  return (
    <div className="small-activity">
      <div className="overlap-group2-1">
        <div className="label-4 valign-text-middle dmsans-medium-athens-gray-16px">
          <span>
            <span className="dmsans-medium-athens-gray-16px">{spanText}</span>
          </span>
        </div>
        <div className="overlap-group1-1">
          <div className="cash-3 valign-text-middle dmsans-bold-white-24px">
            <span>
              <span className="dmsans-bold-white-24px">{spanText2}</span>
            </span>
          </div>
          <img className="chart-1" src={chart} alt="charts"/>
        </div>
      </div>
    </div>
  );
}

export default SmallActivity;
