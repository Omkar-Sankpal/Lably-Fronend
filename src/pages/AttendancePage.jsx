import { Delete, Plus, Trash2, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTeacherStore } from '../store/use.Teacher.Store';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AttendancePage = ({ batch }) => {
  const [openSession, setOpenSession] = useState(0);
  const [hover, setHover] = useState(0);
  const [lab_date, setLab_date] = useState('');
  const [localSessions, setLocalSessions] = useState([]);

  const {
    teacherId,
    t_sub,
    students,
    create_lab_session,
    sessions,
    getSessions,
    deleteLabSession,
    getStudets_Attendanec
  } = useTeacherStore();

  const nav = useNavigate();

  useEffect(() => {
    setLocalSessions(sessions); // Sync local state when sessions change in store
  }, [sessions]);

  const handleCreatelab = () => {
    setOpenSession(1);
  };

  const handleClose = () => {
    setOpenSession(0);
  };

  const handleSession = async () => {
    setOpenSession(0);
    await create_lab_session(
      lab_date,
      t_sub,
      teacherId,
      students[0].roll_no,
      students[students.length - 1].roll_no
    );
    await getSessions(t_sub, batch);
  };

  const formatDateToDDMMYYYY = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  const getLocalDateOnly = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDelete = async (ele) => {
    const formattedDate = getLocalDateOnly(ele.lab_date);
    await deleteLabSession(ele.subject, ele.batch, formattedDate);

    setLocalSessions((prevSessions) =>
      prevSessions.filter((session) => {
        const sessionDate = getLocalDateOnly(session.lab_date);
        return !(
          session.subject === ele.subject &&
          session.batch === ele.batch &&
          sessionDate === formattedDate
        );
      })
    );
    nav("/batch")
  };

  const handleAttendance = async(ele) => {
    const formattedDate = getLocalDateOnly(ele.lab_date);
    await getStudets_Attendanec(ele.subject, ele.batch, formattedDate); 
    nav("/mark-attendance")
  }


  return (
    <div className='relative h-[100vh] w-full overflow-hidden flex flex-col justify-center items-center'>
      <div className='text-xl font-semibold text-primary mt-2 mb-4'>Mark Students Attendance</div>
      <div className='text-lg font-medium mb-2'>{batch}</div>

      <div className='w-full flex flex-col justify-center items-center'>
        {localSessions.map((ele, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(-1)}
            className='bg-base-200 max-w-md w-full rounded-lg flex p-2 hover:bg-base-300 cursor-pointer my-1'
          >
            <div className='flex w-full' onClick={() => handleAttendance(ele)}>
              <div className='w-2/6 text-center'>{ele.subject}</div>
              <div className='w-2/6 text-center'>{ele.batch}</div>
              <div className='w-2/6 text-center'>{formatDateToDDMMYYYY(ele.lab_date)}</div>
            </div>
            <motion.div
              className={`${hover === i ? 'opacity-100' : 'opacity-0'} transition duration-200 ease-in`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleDelete(ele)}
            >
              <Trash2 className='text-gray-500 hover:text-red-400 transition-colors duration-100' />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreatelab}
          className='btn btn-outline mt-2'
        >
          <Plus /> Add Session
        </motion.button>
      </div>

      {openSession ? (
        <>
          <div className='w-full h-[100vh] backdrop-blur-lg absolute top-0 left-0 flex flex-col justify-center items-center'>
            <div className='flex justify-end items-end max-w-lg w-full bg-base-300'>
              <div>
                <button onClick={handleClose} className='text-end hover:bg-primary/20 rounded-full'>
                  <X className='size-5' />
                </button>
              </div>
            </div>

            <div className='flex bg-base-300 max-w-lg w-full justify-center'>
              <label htmlFor='lab_name' className='p-2 bg-base-300'>
                Lab Date :
              </label>
              <input
                type='date'
                className='lab_name p-2 bg-base-300'
                onChange={(e) => setLab_date(e.target.value)}
              />
            </div>

            <div className='bg-base-300 max-w-lg w-full flex justify-center'>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSession}
                className='btn btn-success mt-2 mb-4'
              >
                <Plus /> Create
              </motion.button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AttendancePage;
