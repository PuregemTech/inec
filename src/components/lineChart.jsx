import {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
const LineChart = () => {
  const [state, setState] = useState ({
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Most Alerts',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'North Central',
          'North East',
          'North West',
          'South West',
          'South East',
          'South South',
        ],
      },
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"> </div>
    </div>
  );
};

export default LineChart;
