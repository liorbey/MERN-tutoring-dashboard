import React from 'react';
import {
    ResponsiveContainer,Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend,
} from 'recharts';
import '../../sass/_base.scss'

const SubjectDist = () =>{
  const MOCKDATA = [{
    id: "s1",
    name: "Joe Rogan",
    level: "8/10",
    subject: "python",
    address: '20 W 34th St, New York, NY 10001',
    location: {
    lat: 40.7484405,
    lng: -73.9878584
    },
},
{
    id: "s2",
    name: "roe jogan",
    level: "8/10",
    subject: "javascript",
    address: '20 W 34th St, New York, NY 10001',
    location: {
    lat: 40.7484405,
    lng: -73.9878584
    },
},
{
  id: "s3",
  name: "William Matt",
  level: "9/10",
  subject: "robotics",
  address: '20 W 34th St, New York, NY 10001',
  location: {
  lat: 40.7484405,
  lng: -73.9878584
  },
},
{
  id: "s4",
  name: "Bill Seal",
  level: "6/10",
  subject: "math",
  address: '20 W 34th St, New York, NY 10001',
  location: {
  lat: 40.7484405,
  lng: -73.9878584
  },
},


];

    const res_javascript = MOCKDATA.filter(({subject}) => subject ==="javascript").length;
    const res_python = MOCKDATA.filter(({subject}) => subject ==="python").length;
    const res_robotics = MOCKDATA.filter(({subject}) => subject ==="robotics").length;
    const res_math = MOCKDATA.filter(({subject}) => subject ==="math").length;

    const data = [
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