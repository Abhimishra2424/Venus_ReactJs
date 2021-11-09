function Location(props) {
  const { locationIcon, spanText } = props;

  return (
    <div className="location">
      <img className="location-icon" src={locationIcon} alt="location" />
      <div className="new-york-usa dmsans-medium-wild-blue-yonder-14px">
        <span className="dmsans-medium-wild-blue-yonder-14px">{spanText}</span>
      </div>
    </div>
  );
}

export default Location;
