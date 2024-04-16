import React, { FC, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

const SFCharts: FC = () => {
  const chartRef1 = useRef<HTMLCanvasElement>(null); // Reference to the first chart canvas
  const chartRef2 = useRef<HTMLCanvasElement>(null); // Reference to the second chart canvas
  const chartRef3 = useRef<HTMLCanvasElement>(null); // Reference to the third chart canvas
  const chartRef4 = useRef<HTMLCanvasElement>(null); // Reference to the fourth chart canvas

  useEffect(() => {
    if (chartRef1.current) {
      const ctx1 = chartRef1.current.getContext('2d');

      if (ctx1) {
        const myChart1 = new Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['Mar 2023', 'Apr 2023', 'May 2023', 'June 2023', 'July 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
            datasets: [{
              label: 'No. of Responses per Month (Academic Unit)',
              data: [0, 15, 29, 9, 16, 2, 34, 1, 20, 16, 9, 7],
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart1.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef2.current) {
      const ctx2 = chartRef2.current.getContext('2d');

      if (ctx2) {
        const myChart2 = new Chart(ctx2, {
          type: 'line',
          data: {
            labels: ['Mar 2023', 'Apr 2023', 'May 2023', 'June 2023', 'July 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024'],
            datasets: [{
              label: 'No. of Users per Month (Admin Unit)',
              data: [7, 10, 25, 8, 20, 5, 30, 3, 15, 12, 6, 4],
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
            }]
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart2.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef3.current) {
      const ctx3 = chartRef3.current.getContext('2d');

      if (ctx3) {
        const myChart3 = new Chart(ctx3, {
          type: 'bar',
          data: {
            labels: ['Nursing', 'Engineering', 'Fine Arts and Design', 'CTHM', 'Pharmacy', 'Graduate School', 'Science', 'SHS', 'Commerce and Business', 'JHS', 'Medicine and Surgery', 'Arts and Letters', 'Accountancy', 'Education', 'CICS', 'Architecture', 'IR', 'Music', 'Education High School', 'Rehabilitation Sciences', 'IPEA', 'Civil Law', 'Graduate School of Law', 'Ecclesiastical'],
            datasets: [{
              label: 'Bar Chart 1',
              data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)), // Generate random data for 24 records
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart3.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  useEffect(() => {
    if (chartRef4.current) {
      const ctx4 = chartRef4.current.getContext('2d');

      if (ctx4) {
        const myChart4 = new Chart(ctx4, {
          type: 'bar',
          data: {
            labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F', 'Category G', 'Category H', 'Category I', 'Category J', 'Category K', 'Category L', 'Category M', 'Category N', 'Category O', 'Category P', 'Category Q', 'Category R', 'Category S', 'Category T', 'Category U', 'Category V', 'Category W', 'Category X'],
            datasets: [{
              label: 'Bar Chart 2',
              data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50)), // Generate random data for 24 records
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        // Clean up function to destroy chart on component unmount
        return () => {
          myChart4.destroy();
        };
      }
    }
  }, []); // Run effect only once on component mount

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Stakeholder's Feedback Analytics</h1>

      {/* Charts Container */}
      <div className="grid grid-cols-2 gap-4">
        {/* First Chart */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '450px', height: '250px' }}>
          <canvas ref={chartRef1}></canvas>
        </div>

        {/* Second Chart */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '450px', height: '250px' }}>
          <canvas ref={chartRef2}></canvas>
        </div>

        {/* Third Chart (Bar Chart 1) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '450px', height: '250px' }}>
          <canvas ref={chartRef3}></canvas>
        </div>

        {/* Fourth Chart (Bar Chart 2) */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6" style={{ width: '450px', height: '250px' }}>
          <canvas ref={chartRef4}></canvas>
        </div>
      </div>
    </div>
  );
};

export default SFCharts;
