import React, { useEffect, useState } from 'react';
import AnimBG from '../components/AnimBG';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useTeacherStore } from '../store/use.Teacher.Store';

const TeacherDash = () => {
  const [teacherId1, setid] = useState('');
  const [password, setpassword] = useState('');

  const nav = useNavigate();
    const {getT, teacherId} = useTeacherStore();


    useEffect(() => {
        if (teacherId) {
          nav("/teacher")
        }
      }, [teacherId]);

  const handleTeacher = async() => {

    if(teacherId1 > 111 || teacherId1 < 101){
      console.log(teacherId1);
      
      nav("/devmessage")
    }

    await getT(teacherId1, password);
  }


  return (
    <div className="relative min-h-screen overflow-hidden">
        <div className="hidden md:block absolute inset-0 z-0">
        <AnimBG />
        </div>

      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="border-2 border-primary rounded-lg p-10 bg-base-200 shadow-lg">
          <h2 className="font-semibold text-primary mb-4 text-center">
            Teacher Dashboard
          </h2>
          <input
            type="text"
            className="input input-bordered flex-1 text-sm h-10"
            placeholder="Enter your Teacher ID"
            value={teacherId1}
            onChange={(e) => setid(e.target.value)}
          />
    <div className='mt-4'>
        <input
            type="password"
            className="input input-bordered flex-1 text-sm h-10"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            />
    </div>


          <div className="flex justify-center mt-6">
            <button className="btn" onClick={handleTeacher}>Submit</button>
          </div>

          <div className='flex justify-center text-sm'>
                <p>
                    Student View ? 
                </p>
                <Link to={'/student-dash'} className='underline text-sm hover:text-primary '>
                    Student
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDash;
