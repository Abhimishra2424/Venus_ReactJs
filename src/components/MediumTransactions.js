import Content1 from "./Content1";
import CTA from "./CTA";
import Icon from "./Icon";

function MediumTransactions(props) {
  const {
    spanText,
    spanText2,
    spanText3,
    content1Props,
    iconProps,
    content12Props,
    content12Props2,
  } = props;

  return (
    <div className="medium-transactions">
      <div className="title-1 dmsans-bold-cloud-burst-20px">
        <span className="dmsans-bold-cloud-burst-20px">{spanText}</span>
      </div>
      <Content1
        spanText={content1Props.spanText}
        spanText2={content1Props.spanText2}
        iconProps={content1Props.iconProps}
      />
      <div className="content2">
        <Icon src={iconProps.src} />
        <div className="overlap-group-3">
          <div className="name-2 dmsans-bold-cloud-burst-16px">
            <span className="dmsans-bold-cloud-burst-16px">{spanText2}</span>
          </div>
          <div className="date dmsans-medium-wild-blue-yonder-12px">
            <span className="dmsans-medium-wild-blue-yonder-12px">
              {spanText3}
            </span>
          </div>
        </div>
      </div>
      <Content1
        spanText={content12Props.spanText}
        spanText2={content12Props.spanText2}
        className={content12Props.className}
        iconProps={content12Props.iconProps}
      />
      <CTA
        spanText={content12Props2.spanText}
        keyboard_Backspace={content12Props2.keyboard_Backspace}
      />
    </div>
  );
}

export default MediumTransactions;
