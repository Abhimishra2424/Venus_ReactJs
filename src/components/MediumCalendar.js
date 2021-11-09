function MediumCalendar(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    keyboard_Backspace,
  } = props;

  return (
    <div className="medium-calendar">
      <div className="title-2 dmsans-bold-cloud-burst-34px">
        <span className="dmsans-bold-cloud-burst-34px">{spanText}</span>
      </div>
      <div className="content1-1">
        <div className="rectangle-18"></div>
        <div className="overlap-group-5">
          <div className="name-4 dmsans-bold-cloud-burst-16px">
            <span className="dmsans-bold-cloud-burst-16px">{spanText2}</span>
          </div>
          <p className="date-2 dmsans-medium-wild-blue-yonder-12px">
            <span className="dmsans-medium-wild-blue-yonder-12px">
              {spanText3}
            </span>
          </p>
        </div>
      </div>
      <div className="content2-1">
        <div className="rectangle-18"></div>
        <div className="overlap-group-6">
          <div className="name-4 dmsans-bold-cloud-burst-16px">
            <span className="dmsans-bold-cloud-burst-16px">{spanText4}</span>
          </div>
          <p className="date-2 dmsans-medium-wild-blue-yonder-12px">
            <span className="dmsans-medium-wild-blue-yonder-12px">
              {spanText5}
            </span>
          </p>
        </div>
      </div>
      <div className="content3-1">
        <div className="rectangle-18"></div>
        <div className="overlap-group-7">
          <div className="name-4 dmsans-bold-cloud-burst-16px">
            <span className="dmsans-bold-cloud-burst-16px">{spanText6}</span>
          </div>
          <p className="date-2 dmsans-medium-wild-blue-yonder-12px">
            <span className="dmsans-medium-wild-blue-yonder-12px">
              {spanText7}
            </span>
          </p>
        </div>
      </div>
      <div className="cta-2">
        <div className="view-all-tasksdmsans-bold-canary-16px">
          <span className="dmsans-bold-canary-16px">{spanText8}</span>
        </div>
        <img
          className="keyboardbackspace-1"
          src={keyboard_Backspace}
          alt="keyboardbackspace"
        />
      </div>
    </div>
  );
}

export default MediumCalendar;
