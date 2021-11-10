import React, { useState, useEffect } from "react";
import Dashboard1 from "./components/Dashboard1";
import axios from "axios";

function App() {
  const [payments, setPayments] = useState([]);

  const fecthData = async () => {
    const res = await axios.get("http://localhost:8000/payments");

    const data = Object.keys(res.data.data).map((item) => res.data.data[item]);
    setPayments(data);
  };

  console.log(payments);

  // total amount
  const total = (payments) => {
    return payments
      ?.reduce((total, { transaction_gbp }) => total + transaction_gbp, 0)
      .toFixed(2);
  };

  // total out going amount -10 < 0
  // return -10 , -90 .reduce
  // total -10 , -90 , -100
  const totalOutGoing = (payments) => {
    return payments
      ?.filter((payment) => payment.transaction_gbp < 0)
      .reduce((total, { transaction_gbp }) => total + transaction_gbp, 0)
      .toFixed(2);
  };

  // total out going amount -10 > 0
  // return 10  .reduce
  // total 10.00
  const totalIncoming = (payments) => {
    return payments
      ?.filter((payment) => payment.transaction_gbp > 0)
      .reduce((total, { transaction_gbp }) => total + transaction_gbp, 0)
      .toFixed(2);
  };

  // last month total amount
  const totalOutGoingLastMonth = (payments) => {
    const lastMonth = payments?.filter(
      (payment) =>
        new Date(payment.timestamp).getMonth() === new Date().getMonth() - 1
    );
    return lastMonth
      ?.filter((payment) => payment.transaction_gbp < 0)
      .reduce((total, { transaction_gbp }) => total + transaction_gbp, 0)
      .toFixed(2);
  };

  //This month total amount
  const totalOutGoingThisMonth = (payments) => {
    const lastMonth = payments?.filter(
      (payment) =>
        new Date(payment.timestamp).getMonth() === new Date().getMonth()
    );
    return lastMonth
      ?.filter((payment) => payment.transaction_gbp < 0)
      .reduce((total, { transaction_gbp }) => total + transaction_gbp, 0)
      .toFixed(2);
  };

  const monthOnMonth = (payments) => {
    return (
      (totalOutGoingLastMonth(payments) -
        totalOutGoingThisMonth(payments) / totalOutGoingThisMonth(payments)) *
      100
    ).toFixed(2);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const logoData = {
    group51:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/group-51-2@2x.png",
    spanText: "VENUS",
    spanText2: "DASHBOARD",
  };

  const frame17Data = {
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-11@2x.png",
    spanText: "Activity",
  };

  const frame172Data = {
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-12@2x.png",
    spanText: "Library",
    className: "frame-2",
  };

  const frame173Data = {
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-13@2x.png",
    spanText: "Security",
    className: "frame-3",
  };

  const frame174Data = {
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-14@2x.png",
    spanText: "Schedules",
    className: "frame-4",
  };

  const frame175Data = {
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-15@2x.png",
    spanText: "Payouts",
    className: "frame-5",
  };

  const frame176Data = {
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-16@2x.png",
    spanText: "Settings",
    className: "frame",
  };

  const sideBar2Data = {
    line16:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/line-16-2@2x.png",
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-10@2x.png",
    spanText: "Dashboard",
    icon2:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-17@2x.png",
    spanText2: "Log Out",
    logoProps: logoData,
    frame17Props: frame17Data,
    frame172Props: frame172Data,
    frame173Props: frame173Data,
    frame174Props: frame174Data,
    frame175Props: frame175Data,
    frame176Props: frame176Data,
  };

  const sideBarData = {
    sideBar2Props: sideBar2Data,
  };

  const smallChartData = {
    spanText: "Spent this month",
    spanText2: "$" + totalOutGoingThisMonth(payments),
    bar3: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-3-3@2x.png",
    bar4: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-4-3@2x.png",
    bar5: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-5-3@2x.png",
    bar6: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-6-3@2x.png",
    bar7: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-7-3@2x.png",
  };

  const group41Data = {
    group41:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/shadow-2@2x.png",
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-21@2x.png",
  };

  const smallNewClients2Data = {
    spanText: "New clients",
    spanText2: "321",
    graph:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/graph-3@2x.png",
    group41Props: group41Data,
  };

  const smallSpendingData = {
    icon: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/icon-22@2x.png",
    spanText: "Earnings",
    spanText2: "$" + totalIncoming(payments),
  };

  const smallActivityData = {
    spanText: "Activity",
    spanText2: "$" + total(payments),
    chart:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/chart-6@2x.png",
  };

  const monthsData = {
    spanText: "Jan",
    spanText2: "Feb",
    spanText3: "Mar",
    spanText4: "Apr",
    spanText5: "May",
    spanText6: "Jun",
    spanText7: "Jul",
    spanText8: "Aug",
    spanText9: "Sep",
    spanText10: "Oct",
    spanText11: "Nov",
    spanText12: "Dec",
  };

  const locationData = {
    locationIcon:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/location-icon-2@2x.png",
    spanText: "New York, USA",
  };

  const validData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/done-4@2x.png",
  };

  const mediumChartData = {
    spanText: "Spent this month",
    spanText2: "$" + totalOutGoingLastMonth(payments),
    spanText3: "On track",
    arrow_Drop_Up:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/arrow-drop-up-6@2x.png",
    spanText4: "+2.45%",
    bar1: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-1-2@2x.png",
    bar2: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-2-2@2x.png",
    bar3: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-3-4@2x.png",
    bar4: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-4-4@2x.png",
    bar5: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-5-4@2x.png",
    bar6: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-6-4@2x.png",
    bar7: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-7-4@2x.png",
    validProps: validData,
  };

  const iconData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/directions-bus-1@2x.png",
  };
  const content1Data = {
    spanText: "Public Transport",
    spanText2: "22 September 2020",
    iconProps: iconData,
  };

  const icon2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/shopping-basket-1@2x.png",
  };

  const icon3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/subscriptions-1@2x.png",
  };

  const content12Data = {
    spanText: "Public Transport",
    spanText2: "22 September 2020",
    className: "content3",
    iconProps: icon3Data,
  };

  const cTAData = {
    spanText: "View all",
    keyboard_Backspace:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/keyboard-backspace-3@2x.png",
  };

  const mediumTransactionsData = {
    spanText: "Your transactions",
    spanText2: "Grocery Store",
    spanText3: "18 September 2020",
    content1Props: content1Data,
    iconProps: icon2Data,
    content12Props: content12Data,
    content12Props2: cTAData,
  };

  const mediumCalendarData = {
    spanText: "27 May",
    spanText2: "Meet w/ Simmmple",
    spanText3: "01:00 PM - 02:00 PM",
    spanText4: "Fitness Training",
    spanText5: "02:00 PM - 03:00 PM",
    spanText6: "Reading time",
    spanText7: "03:00 PM - 04:00 PM",
    spanText8: "View all Tasks",
    keyboard_Backspace:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/keyboard-backspace-3@2x.png",
  };

  const dashboard1Data = {
    spanText: "Hi Andrei,",
    spanText2: "Welcome to Venus!",
    largeInput:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/background-12@2x.png",
    searchIcon:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/search-icon-1@2x.png",
    spanText3: "Search",
    spanText4: "Total Spent",
    spanText5: "$" + totalOutGoing(payments),
    bar_Chart:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/bar-chart-5@2x.png",
    chart:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/chart-7@2x.png",
    line11:
      "https://anima-uploads.s3.amazonaws.com/projects/618a12a8d7c61efd7662d196/releases/618a14c3cadb55141aee6d5c/img/line-11-2@2x.png",
    spanText6: "$179",
    avatar:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Favatar-370-456322.png&imgrefurl=https%3A%2F%2Ficonscout.com%2Ficon%2Favatar-370&tbnid=lMIRN_4QZeYfAM&vet=12ahUKEwiozOafoYv0AhXYktgFHWlqAc0QMygAegUIARDTAQ..i&docid=trzEiSTr192AAM&w=256&h=256&q=avatar%20icon&ved=2ahUKEwiozOafoYv0AhXYktgFHWlqAc0QMygAegUIARDTAQ",
    spanText7: "Charles Robbie",
    spanText8: "28",
    spanText9: "Projects",
    spanText10: "643",
    spanText11: "Followers",
    spanText12: "76",
    spanText13: "Following",
    sideBarProps: sideBarData,
    smallChartProps: smallChartData,
    smallNewClients2Props: smallNewClients2Data,
    smallSpendingProps: smallSpendingData,
    smallActivityProps: smallActivityData,
    smallChartProps2: monthsData,
    smallChartProps3: locationData,
    mediumChartProps: mediumChartData,
    mediumTransactionsProps: mediumTransactionsData,
    mediumCalendarProps: mediumCalendarData,
  };

  return <Dashboard1 {...dashboard1Data} />;
}

export default App;
