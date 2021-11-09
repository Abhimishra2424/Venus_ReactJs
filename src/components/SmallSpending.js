function SmallSpending(props) {
  const { icon, spanText, spanText2 } = props;

  return (
    <div className="small-earnings">
      <div className="icon-4">
        <img className="icon-5" src={icon} alt="icon" />
      </div>
      <div className="flex-col-4">
        <div className="label-3 dmsans-medium-wild-blue-yonder-14px">
          <span className="dmsans-medium-wild-blue-yonder-14px">
            {spanText}
          </span>
        </div>
        <div className="cash-2 dmsans-bold-cloud-burst-24px">
          <span className="dmsans-bold-cloud-burst-24px">{spanText2}</span>
        </div>
      </div>
    </div>
  );
}

export default SmallSpending;
