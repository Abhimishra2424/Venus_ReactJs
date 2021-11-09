function CTA(props) {
  const { spanText, keyboard_Backspace } = props;

  return (
    <div className="cta">
      <div className="cta-1dmsans-bold-canary-16px">
        <span className="dmsans-bold-canary-16px">{spanText}</span>
      </div>
      <img className="keyboardbackspace" src={keyboard_Backspace} alt="keyboardbackspace" />
    </div>
  );
}

export default CTA;
