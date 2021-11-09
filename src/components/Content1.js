import Icon from "./Icon";

function Content1(props) {
  const { spanText, spanText2, className, iconProps } = props;

  return (
    <div className={`content1 ${className || ""}`}>
      <Icon src={iconProps.src} />
      <div className="overlap-group-4">
        <div className="name-3dmsans-bold-cloud-burst-16px">
          <span className="span-11dmsans-bold-cloud-burst-16px">
            {spanText}
          </span>
        </div>
        <div className="date-1dmsans-medium-wild-blue-yonder-12px">
          <span className="span-11dmsans-medium-wild-blue-yonder-12px">
            {spanText2}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Content1;
