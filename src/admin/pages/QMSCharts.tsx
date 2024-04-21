import React, { FC, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

const QMSCharts: FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Data for the evaluation ratings
    const categories = ['Plan', 'Do', 'Check', 'Act'];
    const ratings = [4.2, 3.8, 4.5, 4.0];  // Example ratings (you can replace these with actual data)

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Chart configuration
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: categories,
            datasets: [{
              label: 'Evaluation Rating',
              data: ratings,
              backgroundColor: 'skyblue',
            }]
          },
          options: {
            scales: {
              x: {
                beginAtZero: true,
                suggestedMax: 5,  // Adjust the maximum value as needed
              }
            },
            plugins: {
              legend: {
                display: false,  // Hide the legend for this chart
              },
            },
          },
        });
      }
    }
  }, []);  // Run this effect once on component mount

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-lg font-medium mb-4">Quality Management System Evaluation Ratings</h2>
      <div style={{ maxWidth: '600px', width: '100%', height: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default QMSCharts;
