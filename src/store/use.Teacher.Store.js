import {create} from 'zustand'; 
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = "https://lably-backend.onrender.com/api/dmsl_mini"; 

export const useTeacherStore = create((set) => ({
    teacherId : null,
    isLoading: false, 
    t_name: null,
    t_sub: null, 
    batches: [],
    t_details: null,
    students: null,
    batch:null,
    assignments: [],
    current_assignment: null,
    selected_ass_students: [],
    ind_stud: [], 
    student: null,
    sessions: [], 
    Attendace_studs:[],
    currLabDate: "",
    utStuds: [],
    tw1: null, 
    tw2: null, 
    tw3: null, 

    getT: async (teacherId, password) => {
        try {
          set({ isLoading: true });
      
          const response = await axios.post(`${API_URL}/get-teacher`, {
            teacherId,
            password,
          });
      
          const data = response.data;

          set({
            t_details: response.data
          })
      
          if (Array.isArray(data) && data.length > 0) {
            const { t_id, t_name, subject, batch_details } = data[0];

            // Extract batches from batch_details
            const batches = batch_details.map((b) => b.batch);

            set({
              isLoading: false,
              teacherId: t_id,
              t_name: t_name,
              t_sub: subject,
              batches: batches,
            });
          } else {
            set({ isLoading: false });
            console.warn("No teacher data found.");
          }


        } catch (error) {
          set({ isLoading: false });
          console.error("Error fetching teacher data:", error);
        }
      },

      getBatch: async(batch_name, subject) => {
        try {
            const response = await axios.post(`${API_URL}/get-batch-students`, {batch:batch_name}); 
            set({
                batch:batch_name,
                students:response.data
            })

            console.log("response from getBatch : ",response);
            

            const response2 = await axios.post(`${API_URL}/get-ass`, {subject});

            set({
                assignments: response2.data
            })
            
        } catch (error) {
            
        }
    },

    setCurrAssignment: (a_id, title) => {
        set({
            current_assignment: {
                a_id: a_id, 
                title: title
            }
        })
    },

    getStudentsAss_Details: async({a_id, batch}) => {
        try {

            console.log(a_id, " batch:", batch);
            

            const response = await axios.post(`${API_URL}/get-ass-students`, {a_id: a_id, batch: batch}); 

            console.log("Student for perticular a: " ,response.data);
            
            set({
                selected_ass_students: response.data
            })
            
        } catch (error) {
            
        }
    },

    updateStudent: async(updateData) => {
        try {
            
            const response = await axios.post(`${API_URL}/update-assignment`, {...updateData}); 

            // console.log("Student for perticularjjjj a: " ,response.data);
            toast.success("Student data updated")
            
        } catch (error) {
            toast.error(error.response.data.sqlMessage)
            console.log(error.response.data.sqlMessage)
        }
    },

    individual_student: async (roll_no) => {
        try {
          const response = await axios.post(`https://lably-backend.onrender.com/api/dmsl-mini/students/student`, { roll_no });
      
          console.log(response);
      
          if (response.data && Object.keys(response.data).length > 0) {
            set({
              ind_stud: response.data,
              student: response.data
            });
          } else {
            console.warn("Student data is empty.");
          }
      
        } catch (error) {
          console.error("Error fetching individual student:", error);
        }
      }, 
    
    create_lab_session: async (date, subject, t_id, start_roll, end_roll) => {
      try {
        const response = await axios.post(`${API_URL}/createlab` , {date, subject, t_id, start_roll, end_roll}); 
        
        toast.success(response.data?.[0]?.[0]?.message  || 'Session created') 
        
        // set({
        //   sessions: [...sessions, ]
        // })
        
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
      }
    },

    getSessions: async (subject , batch) => {
      try {
        const response = await axios.post(`${API_URL}/get-lab-sessions` , {subject, batch}); 
          
        console.log(response);
        set({
          sessions : response.data 
        })
        
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
      }
    },

    deleteLabSession: async(subject, batch, lab_date) => {
        try {
          console.log("SBL :",subject, batch, lab_date);
          
          const response = await axios.post(`${API_URL}/delete-lab-session` , {subject, batch, lab_date}) 
          
          console.log("delete session response : ",response);
          toast.success(response.data.message)
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message)
        }
    },

    getStudets_Attendanec: async(subject, batch, lab_date) => {
      try {
        const response = await axios.post(`${API_URL}/get-students-attendance` , {subject, batch, lab_date}) 
        
        console.log("attendaceee session response : ",response);
        set({
          Attendace_studs: response.data.data, 
          currLabDate: lab_date,
        })
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
      }
  },

  updateAttendance: async(present, roll_no, batch, subject, lab_date) => {
    try {
      const response = await axios.post(`${API_URL}/update-attendance` , {present, roll_no, batch, subject, lab_date}) 
      
      console.log("attendaceee session updated response : ",response);
      toast.success(`Updated ${roll_no} successfully`)

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  },
  updateUT : async(marks1, marks2, marks3 , subject, roll_no) => {
    try {
      const response = await axios.post(`${API_URL}/update-ut-marks` , {marks1, marks2, marks3 , subject, roll_no}) 
      
      console.log("attendaceee session updated response : ",response);
      toast.success(`Updated ${roll_no} successfully`)

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }, 

  getUt : async(subject , batch) => {
    try {
      const response = await axios.post(`${API_URL}/get-ut-details` , {subject , batch}) 
      
      console.log("attendaceee session updated response : ",response);

      set({
          utStuds: response.data
      })

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }, 

  getTermWork : async(roll_no, subject, batch) => {
    try {
      const res1 = await axios.post(`${API_URL}/tw1` , {subject , batch, roll_no}) 
      const res2 = await axios.post(`${API_URL}/tw2` , {subject , batch, roll_no}) 
      const res3 = await axios.post(`${API_URL}/tw3` , {subject , roll_no}) 

      console.log("1", res1, "2", res2, "3",res3);
      

      set({
        tw1: res1.data, 
        tw2: res2.data, 
        tw3: res3.data
      })

    } catch (error) {
      console.log(error);
       
    }
  }
      
})); 