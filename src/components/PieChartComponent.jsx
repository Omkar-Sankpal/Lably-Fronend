// PieChartComponent.jsx
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Markdisplay from './Markdisplay';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({completed, remaining, title, marks, totalmarks, subject}) => {
  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        label: 'Assignment Progress',
        data: [completed, remaining],
        backgroundColor: ['#4ade80', '#f87171'], // green + red
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const [display, setDisplay] = useState(0);

  const handleMarks = () => {
    setDisplay(1);
  }

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{`${title}`}</h2>
        <div className="w-64 h-64">
          <Pie data={data} options={options} />
        </div>

        <div>
          <h4 className='font-semibold'>Marks</h4>
          <button 
            onClick={handleMarks}
            className='btn btn-outline mt-2'>
            {marks} / {totalmarks}
          </button>

          {
            display ? <Markdisplay  onClose={() => setDisplay(0)} subject={subject}/> : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
