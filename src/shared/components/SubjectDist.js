import React, {useState, useEffect} from 'react';
import {
    ResponsiveContainer,Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend,
} from 'recharts';
import '../../sass/_base.scss'

const SubjectDist = () =>{

  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();
  const [isLoading, setIsLoading] = useState();


  useEffect(()=>{
      const sendRequest = async () => {
          setIsLoading(true);
          try{
              const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/students`)
              const responseData = await response.json();

              if (!response.ok){
                  throw new Error(responseData.message);
              }
  
              setLoadedUsers(responseData.students);
          }catch(err){
              setIsLoading(false)
              setError(err.message);
          }

      }
      sendRequest();
  },[])
    let data
    if (loadedUsers){
      const res_javascript = loadedUsers.filter(({subject}) => subject ==="javascript").length;
      const res_python = loadedUsers.filter(({subject}) => subject ==="python").length;
      const res_robotics = loadedUsers.filter(({subject}) => subject ==="robotics").length;
      const res_math = loadedUsers.filter(({subject}) => subject ==="math").length;
      data = [
        {
          subject:'Python' , A: res_python , B: 6, 
        },
        {
          subject: 'JS', A: res_javascript, B: 7, 
        },
        {
          subject: 'Robotics', A: res_robotics, B: 6, 
        },
        {
          subject: 'Math', A: res_math, B: 4, 
        },
      ];
    }

      return(
        
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
        <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="2019" dataKey="A" stroke="#3895D3" fill="#3895D3" fillOpacity={0.6} />
        <Radar name="2018" dataKey="B" stroke="999" fill="#999" fillOpacity={0.6} />
        <Legend/>
        </RadarChart>
        </ResponsiveContainer>
        </div>
      );

};

export default SubjectDist