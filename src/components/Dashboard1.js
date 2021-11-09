import SideBar from "./SideBar";
import SmallChart from "./SmallChart";
import SmallNewClients2 from "./SmallNewClients2";
import SmallSpending from "./SmallSpending";
import SmallActivity from "./SmallActivity";
import Months from "./Months";
import Location from "./Location";
import MediumChart from "./MediumChart";
import MediumTransactions from "./MediumTransactions";
import MediumCalendar from "./MediumCalendar";

function Dashboard1(props) {
  const {
    spanText,
    spanText2,
    largeInput,
    searchIcon,
    spanText3,
    spanText4,
    spanText5,
    bar_Chart,
    chart,
    line11,
    spanText6,
    avatar,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    sideBarProps,
    smallChartProps,
    smallNewClients2Props,
    smallSpendingProps,
    smallActivityProps,
    smallChartProps2,
    smallChartProps3,
    mediumChartProps,
    mediumTransactionsProps,
    mediumCalendarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard-1 screen">
        <SideBar sideBar2Props={sideBarProps.sideBar2Props} />
        <div className="flex-col">
          <div className="flex-row">
            <div className="flex-col-1">
              <div className="hi-andrei dmsans-bold-lynch-14px">
                <span className="dmsans-bold-lynch-14px">{spanText}</span>
              </div>
              <h1 className="title dmsans-bold-astronaut-34px">
                <span className="dmsans-bold-astronaut-34px">{spanText2}</span>
              </h1>
            </div>
            <div
              className="large-input"
              style={{ backgroundImage: `url(${largeInput})` }}
            >
              <img className="search-icon" src={searchIcon} alt="src" />
              <div className="search dmsans-normal-pewter-blue-12px">
                <span className="dmsans-normal-pewter-blue-12px">
                  {spanText3}
                </span>
              </div>
            </div>
          </div>
          <div className="fill-here">
            <div className="frame-11">
              <SmallChart
                spanText={smallChartProps.spanText}
                spanText2={smallChartProps.spanText2}
                bar3={smallChartProps.bar3}
                bar4={smallChartProps.bar4}
                bar5={smallChartProps.bar5}
                bar6={smallChartProps.bar6}
                bar7={smallChartProps.bar7}
              />
              <SmallNewClients2
                spanText={smallNewClients2Props.spanText}
                spanText2={smallNewClients2Props.spanText2}
                graph={smallNewClients2Props.graph}
                group41Props={smallNewClients2Props.group41Props}
              />
              <SmallSpending
                icon={smallSpendingProps.icon}
                spanText={smallSpendingProps.spanText}
                spanText2={smallSpendingProps.spanText2}
              />
              <SmallActivity
                spanText={smallActivityProps.spanText}
                spanText2={smallActivityProps.spanText2}
                chart={smallActivityProps.chart}
              />
            </div>
            <div className="frame-12">
              <div className="large-chart-per-month">
                <div className="flex-row-1">
                  <div className="flex-col-2">
                    <div className="label dmsans-medium-wild-blue-yonder-14px">
                      <span className="dmsans-medium-wild-blue-yonder-14px">
                        {spanText4}
                      </span>
                    </div>
                    <div className="cash valign-text-middle dmsans-bold-cloud-burst-34px">
                      <span>
                        <span className="dmsans-bold-cloud-burst-34px">
                          {spanText5}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="button">
                    <img className="barchart" src={bar_Chart} alt="barchat" />
                  </div>
                </div>
                <div className="overlap-group">
                  <img className="chart" src={chart} alt="chart" />
                  <div className="high-line">
                    <img className="line-11" src={line11} alt="line 11" />
                    <div className="price valign-text-middle dmsans-medium-canary-12px">
                      <span>
                        <span className="dmsans-medium-canary-12px">
                          {spanText6}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <Months {...smallChartProps2} />
              </div>
              <div className="medium-user">
                <img className="avatar" src={avatar} alt="avatar" />
                <div className="name dmsans-bold-cloud-burst-24px">
                  <span className="dmsans-bold-cloud-burst-24px">
                    {spanText7}
                  </span>
                </div>
                <Location
                  locationIcon={smallChartProps3.locationIcon}
                  spanText={smallChartProps3.spanText}
                />
                <div className="flex-row-2">
                  <div className="overlap-group2">
                    <div className="number dmsans-bold-cloud-burst-24px">
                      <span className="dmsans-bold-cloud-burst-24px">
                        {spanText8}
                      </span>
                    </div>
                    <div className="projects dmsans-normal-wild-blue-yonder-12px">
                      <span className="dmsans-normal-wild-blue-yonder-12px">
                        {spanText9}
                      </span>
                    </div>
                  </div>
                  <div className="overlap-group1">
                    <div className="number-1 dmsans-bold-cloud-burst-24px">
                      <span className="dmsans-bold-cloud-burst-24px">
                        {spanText10}
                      </span>
                    </div>
                    <div className="followers dmsans-normal-wild-blue-yonder-12px">
                      <span className="dmsans-normal-wild-blue-yonder-12px">
                        {spanText11}
                      </span>
                    </div>
                  </div>
                  <div className="overlap-group-1">
                    <div className="number-2 dmsans-bold-cloud-burst-24px">
                      <span className="dmsans-bold-cloud-burst-24px">
                        {spanText12}
                      </span>
                    </div>
                    <div className="following dmsans-normal-wild-blue-yonder-12px">
                      <span className="dmsans-normal-wild-blue-yonder-12px">
                        {spanText13}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-13">
              <MediumChart {...mediumChartProps} />
              <MediumTransactions
                spanText={mediumTransactionsProps.spanText}
                spanText2={mediumTransactionsProps.spanText2}
                spanText3={mediumTransactionsProps.spanText3}
                content1Props={mediumTransactionsProps.content1Props}
                iconProps={mediumTransactionsProps.iconProps}
                content12Props={mediumTransactionsProps.content12Props}
                content12Props2={mediumTransactionsProps.content12Props2}
              />
              <MediumCalendar {...mediumCalendarProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard1;
