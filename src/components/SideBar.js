import SideBar2 from "./SideBar2";

function SideBar(props) {
  const { sideBar2Props } = props;

  return (
    <div className="side-bar">
      <SideBar2 {...sideBar2Props} />
    </div>
  );
}


export default SideBar