import React, { useEffect, useState } from 'react';
import AnimBG from '../components/AnimBG';
import { Link, useNavigate } from 'react-router-dom';
import { useTeacherStore } from '../store/use.Teacher.Store';

const StudentDash = () => {
  const [roll, setRoll] = useState('');

  const [teacherId1, setid] = useState('');
    const [password, setpassword] = useState('');
  
    const nav = useNavigate();
    const { getT, teacherId, individual_student, student, isLoading } = useTeacherStore();

  
    useEffect(() => {
        if (student && Object.keys(student).length > 0) {
          nav("/student");
        }
      }, [student]);
  
    const handleStudent = async() => {
      if(23300 > roll || 23387 < roll )
        nav("/devmessage")

      await individual_student(roll);
    }

  return (
    <div className="relative min-h-screen overflow-hidden">
        <div className="hidden md:block absolute inset-0 z-0">
        <AnimBG />
        </div>

      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="border-2 border-primary rounded-lg p-10 bg-base-200 shadow-lg">
          <h2 className="font-semibold text-primary mb-4 text-center">
            Student Dashboard
          </h2>
          <input
            type="text"
            className="input input-bordered flex-1 text-sm h-10"
            placeholder="Roll number 23301-87"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />

          {
            isLoading ?          
            <div className='flex justify-center mt-6'>
                <button className="btn text-xs" onClick={handleStudent} disabled={true}>Hang on while the backend loads ...</button>
            </div>
            :
            <div className="flex justify-center mt-6">
            <button className="btn" onClick={handleStudent}>Submit</button>
            </div>
          }

          <div className='flex justify-center text-sm'>
                <p>
                    Teacher login ? 
                </p>
                <Link to={'/teacher-dash'} className='underline text-sm hover:text-primary '>
                    Teacher
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDash;
