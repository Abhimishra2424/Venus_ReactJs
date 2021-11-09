function Frame17(props) {
  const { icon, spanText, className } = props;

  return (
    <div className={`frame-1 ${className || ""}`}>
      <img className="icon-2" src={icon} alt="icon"/>
      <div className="activity dmsans-medium-wild-blue-yonder-16px">
        <span className="span-3 dmsans-medium-wild-blue-yonder-16px">
          {spanText}
        </span>
      </div>
    </div>
  );
}

export default Frame17;
