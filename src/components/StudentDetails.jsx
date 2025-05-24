import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTeacherStore } from '../store/use.Teacher.Store';

const StudentDetails = ({ ele }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toISOString().split('T')[0];
  };

  const [dop, setDop] = useState(formatDate(ele.dop));
  const [dos, setDos] = useState(formatDate(ele.dos));
  const [status, setStatus] = useState(ele.status || false);
  const [marks1, setMarks1] = useState(ele.marks1 || 0);
  const [marks2, setMarks2] = useState(ele.marks2 || 0);

  const { current_assignment, updateStudent } = useTeacherStore();

  const handleUpdate = async () => {
    const updatedData = {
      a_id: current_assignment.a_id,
      roll_no: ele.roll_no,
      dop, // already in 'YYYY-MM-DD'
      dos,
      status,
      marks1,
      marks2,
    };

    await updateStudent(updatedData);
  };

  return (
    <motion.div className='border border-primary/10 bg-base-300 my-2 w-full max-w-5xl rounded-lg hover:bg-secondary/5 p-4 flex flex-col md:flex-row md:flex-wrap'>
      
      <div className='font-medium p-2 border border-primary/10 text-center w-full md:w-[80px]'>
        {ele.roll_no || "0000"}
      </div>

      <div className='font-medium p-2 border border-primary/10 text-center w-full md:flex-1'>
        {ele.student_name || "Name"}
      </div>

      <div className='p-2 border border-primary/10 w-full md:flex-1'>
        <input 
          type="date" 
          className="input input-bordered w-full" 
          value={dop}
          onChange={(e) => setDop(e.target.value)}
        />
      </div>

      <div className='p-2 border border-primary/10 w-full md:flex-1'>
        <input 
          type="date" 
          className="input input-bordered w-full" 
          value={dos}
          onChange={(e) => setDos(e.target.value)}
        />
      </div>

      <div className='p-2 border border-primary/10 w-full md:flex-1 flex justify-center items-center'>
        <input 
          type="checkbox" 
          className="toggle toggle-success" 
          checked={status}
          onChange={() => setStatus(!status)}
        />
      </div>

      <div className='p-2 border border-primary/10 w-full md:flex-1'>
        <input 
          type="number" 
          min="0" 
          max="5" 
          className="input input-bordered w-full" 
          value={marks1}
          onChange={(e) => setMarks1(parseInt(e.target.value))}
        />
      </div>

      <div className='p-2 border border-primary/10 w-full md:flex-1'>
        <input 
          type="number" 
          min="0" 
          max="5" 
          className="input input-bordered w-full" 
          value={marks2}
          onChange={(e) => setMarks2(parseInt(e.target.value))}
        />
      </div>

      <div className='p-2 border border-primary/10 w-full flex justify-center items-center'>
        <button 
          className="btn btn-outline btn-primary w-full md:w-auto" 
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </motion.div>
  );
};

export default StudentDetails;
