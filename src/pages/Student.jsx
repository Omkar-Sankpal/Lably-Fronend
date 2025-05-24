import React from 'react'
import { useTeacherStore } from '../store/use.Teacher.Store'
import PieChartComponent from '../components/PieChartComponent';

const Student = () => {

    const {ind_stud} = useTeacherStore();

    console.log(ind_stud);
    
    let completed = 0;
    let cgl = 0;
    let dmsl = 0;
    let em = 0;
    let psdl = 0; 
    let pbl = 0; 

    let totalMarks = 0 ; 
    let cglMarks = 0 ; 
    let dmslmarks = 0 ; 
    let emmarks = 0 ;
    let psdlmarks = 0 ;
    let pblmarks = 0 ;

    
    for (let i = 0; i < ind_stud.length; i++) {
      // Check if the assignment is completed
      if (ind_stud[i].status === 1) {
        completed++;
        totalMarks += ind_stud[i].marks1 + ind_stud[i].marks2 ; 
        // Count subject-wise based on a_id
        if (ind_stud[i].a_id.startsWith('CGL')) {
          cgl++;
          cglMarks += ind_stud[i].marks1 + ind_stud[i].marks2 ; 
        } else if (ind_stud[i].a_id.startsWith('DMSL')) {
          dmsl++;
          dmslmarks += ind_stud[i].marks1 + ind_stud[i].marks2 ; 
        } else if (ind_stud[i].a_id.startsWith('TUT')) {
          em++;
          emmarks += ind_stud[i].marks1 + ind_stud[i].marks2 ; 
        } else if (ind_stud[i].a_id.startsWith('PSDL')) {
          psdl++;
          psdlmarks += ind_stud[i].marks1 + ind_stud[i].marks2 ; 
        }else if (ind_stud[i].a_id.startsWith('PBL')) {
          pbl++;
          pblmarks += ind_stud[i].marks1 + ind_stud[i].marks2 ; 
        }
      }
    }
    
    // console.log("Total Completed Assignments:", completed, " ", totalMarks);
    // console.log("Completed CGL Assignments:", cgl  ," ", cglMarks);
    // console.log("Completed DMSL Assignments:", dmsl,  " ", dmslmarks);
    // console.log("Completed EM Assignments:", em,  " ", emmarks);
    // console.log("Completed PSDL Assignments:", psdl,  " ", psdlmarks);
    
    

  return (
    <div>
    <div className='flex flex-col '>
      <div className='flex flex-col justify-around mt-20'>

      <h2 className='text-2xl font-semibold text-primary text-center'>{ind_stud[0].student_name}</h2>
      <h4 className='font-medium text-secondary mt-4 text-center'>{ind_stud[0].roll_no}</h4>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PieChartComponent completed={completed} remaining={ind_stud.length - completed} title={"Overall Progress"} marks={totalMarks} totalmarks={completed*10} subject={""}/>
        <PieChartComponent completed={psdl} remaining={14-psdl} title={"PSDL Progress"} marks={psdlmarks} totalmarks={psdl*10} subject={"PSDL"}/>
        <PieChartComponent completed={dmsl} remaining={12-dmsl} title={"DMSL Progress"} marks={dmslmarks} totalmarks={dmsl*10} subject={"DMSL"}/>
        <PieChartComponent completed={cgl} remaining={8-cgl} title={"CGL Progress"} marks={cglMarks} totalmarks={cgl*10} subject={"CGL"}/>
        <PieChartComponent completed={em} remaining={6-em} title={"EM Progress"} marks={emmarks} totalmarks={em*10} subject={"TUT"}/>
        <PieChartComponent completed={pbl} remaining={8-pbl} title={"PBL Progress"} marks={pblmarks} totalmarks={pbl*10} subject={"PBL"}/>

      </div>
      <div>
      </div>
    </div>
  </div>
  )
}

export default Student

