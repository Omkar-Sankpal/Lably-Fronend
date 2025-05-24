import React, { useState } from 'react'
import { useTeacherStore } from '../store/use.Teacher.Store';
import {motion} from 'framer-motion'

const UTdetails = ({ele}) => {
    
      const [marks1, setMarks1] = useState(ele.marks1 || 0);
      const [marks2, setMarks2] = useState(ele.marks2 || 0);
      const [marks3, setMarks3] = useState(ele.marks2 || 0);
    
      const { current_assignment, updateUT, t_sub } = useTeacherStore();
    
      const handleUpdate = async() => {
        console.log("Update UT : ",marks1 , marks2, marks3, t_sub, ele.roll_no);
        
        await updateUT(marks1 , marks2, marks3, t_sub, ele.roll_no);
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
              type="number" 
              min="0" 
              max="30" 
              className="input input-bordered w-full" 
              value={marks1}
              onChange={(e) => setMarks1(parseInt(e.target.value))}
            />
          </div>
    
          <div className='p-2 border border-primary/10 w-full md:flex-1'>
            <input 
              type="number" 
              min="0" 
              max="30" 
              className="input input-bordered w-full" 
              value={marks2}
              onChange={(e) => setMarks2(parseInt(e.target.value))}
            />
          </div>

          <div className='p-2 border border-primary/10 w-full md:flex-1'>
            <input 
              type="number" 
              min="0" 
              max="30" 
              className="input input-bordered w-full" 
              value={marks3}
              onChange={(e) => setMarks3(parseInt(e.target.value))}
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

export default UTdetails