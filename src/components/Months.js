function Months(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
  } = props;

  return (
    <div className="months dmsans-medium-wild-blue-yonder-12px">
      <div className="name-1">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText2}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText3}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText4}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText5}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText6}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText7}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText8}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">{spanText9}</span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">
          {spanText10}
        </span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">
          {spanText11}
        </span>
      </div>
      <div className="months-item">
        <span className="dmsans-medium-wild-blue-yonder-12px">
          {spanText12}
        </span>
      </div>
    </div>
  );
}

export default Months;
