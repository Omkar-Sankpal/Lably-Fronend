import React, { useState } from 'react'
import { useTeacherStore } from '../store/use.Teacher.Store';
import {motion} from 'framer-motion'
import { Check, X } from 'lucide-react';

const MarkingPage = ({batch}) => {
    const {Attendace_studs, updateAttendance, t_sub, currLabDate} = useTeacherStore();
    
    const [attendance, setAttendance] = useState(
        Attendace_studs.map((student) => ({
            roll_no: student.roll_no,
            student_name: student.students.student_name,
            present: student.present || false,
        }))
    );

    const handlePresent = async(index) => {
        const newAttendance = [...attendance];
        newAttendance[index].present = true;
        setAttendance(newAttendance); 

        // console.log(newAttendance[index].present, newAttendance[index].roll_no, batch, t_sub, currLabDate);
        
        await updateAttendance(newAttendance[index].present, newAttendance[index].roll_no, batch, t_sub, currLabDate)
    }
    
    const handleAbsent = async(index) => {
        const newAttendance = [...attendance];
        newAttendance[index].present = false;
        setAttendance(newAttendance);
        
        
        // console.log(newAttendance[index].present, newAttendance[index].roll_no, batch, t_sub, currLabDate);
        await updateAttendance(newAttendance[index].present, newAttendance[index].roll_no, batch, t_sub, currLabDate)
    }

    console.log(attendance, Attendace_studs);
    

  return (
    <div className='relative h-[100vh] w-full overflow-hidden flex flex-col justify-center items-center'>
      <div className='text-xl font-semibold text-primary mt-4'>Mark Students Attendance</div>
      <div className='text-lg font-medium mt-4'>{batch}</div>
        <div className='flex max-w-2xl w-full font-semibold'>
        <div className='w-1/6 text-center'>Roll no</div>
        <div className='w-2/6 text-center'>Name</div>
        <div className='w-3/6 text-center'>Attendance</div>
        </div>
      <div className='w-full flex flex-col items-center overflow-y-scroll custom-scrollbar mt-2'>
        {attendance.map((ele, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            className='bg-base-200 max-w-2xl w-full rounded-lg flex p-2 hover:bg-base-300 cursor-pointer my-1'
          >
            <div className='flex w-full'>
              <div className='w-1/6 text-center'>{ele.roll_no}</div>
              <div className='w-2/6 text-center'>{ele.student_name}</div>
              <div className='w-3/6 text-center'>
                <button
                  className={`btn mx-2 ${ele.present ? "btn-success" : "btn-outline"}`}
                  onClick={() => handlePresent(i)}
                >
                    <Check className='size-4'/>
                </button>
                <button
                  className={`btn mx-2 ${!ele.present ? "btn-error" : "btn-outline"}`}
                  onClick={() => handleAbsent(i)}
                >
                    <X className='size-4'/>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='mt-2 p-4 bg-base-200 rounded-lg w-full max-w-2xl mb-2'>
        <div className='flex justify-between'>
          <span>Total Students: {attendance?.length || 0}</span>
          <span className='text-success'>
            Present: {attendance.filter(student => student.present).length}
          </span>
          <span className='text-error'>
            Absent: {attendance.filter(student => !student.present).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarkingPage;
