// import {MdKeyboardArrowDown} from 'react-icons/md';
// import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
// import {FiSearch} from 'react-icons/fi';
import './emergency.css';
import Aside from '../../components/aside';
import NavBar from '../../components/navBar';
// import Button from '../../components/button';
// import InfoBox from '../../components/infoBox';
// import LineChart from '../../components/lineChart';
// import BarChart from '../../components/barChart';
// import PieChart from '../../components/pieChart';
// import React, {useState} from 'react';
// import Select from '../../components/select';
// import Table from '../../components/table';
// import TableFooter from '../../components/tableFooter';
import MainContainer from '../../components/mainContainer';

const Emergency = () => {
  // const [showContainer, setShowContainer] = useState (true);
  // const [clicked, setClicked] = useState (false);
  // const [activeClick, setActiveClick] = useState ('click1');

  // const [showPending, setShowPending] = useState (true);
  // const [reportActiveClick, setReportActiveClick] = useState ('click1');

  // const handleActiveClick = name => {
  //   setActiveClick (name);
  // };
  // const handleReportActiveClick = name => {
  //   setReportActiveClick (name);
  // };
  return (
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className="app-wrapper">
        <NavBar title="Emergency Report" />
        <Aside />
        <main className="app-main app_main">
          <MainContainer />
        </main>
      </div>
    </div>
  );
};

export default Emergency;
