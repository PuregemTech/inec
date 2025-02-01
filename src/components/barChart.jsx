import ReactApexChart from 'react-apexcharts';
import {useState} from 'react';

const BarChart = () => {
  const [state, setState] = useState ({
    series: [
      {
        data: [21, 22, 10, 28, 16, 21],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: 'red',
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ['North', 'Central'],
          ['North', 'East'],
          ['North', 'West'],
          //   'Amber',
          ['South', 'West'],
          ['South', 'East'],
          ['South', 'South'],
        ],
        labels: {
          style: {
            colors: 'gray',
            fontSize: '12px',
          },
        },
      },
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist" />
    </div>
  );
};

export default BarChart;
