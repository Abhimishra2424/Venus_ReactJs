function Icon(props) {
  const { src } = props;

  return (
    <div className="icon-6">
      <img className="directionsbus" src={src} alt="directionsbus" />
    </div>
  );
}

export default Icon;
