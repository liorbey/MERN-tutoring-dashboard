import React, { PureComponent } from 'react';
import {
    ResponsiveContainer,Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend,
} from 'recharts';
import '../sass/_base.scss'

const SubjectDist = () =>{
    const data = [
        {
          subject:'Python' , A: 8, B: 6, fullMark: 150,
        },
        {
          subject: 'JS', A: 2, B: 7, fullMark: 150,
        },
        {
          subject: 'Robotics', A: 4, B: 6, fullMark: 150,
        },
        {
          subject: 'Math', A: 7, B: 4, fullMark: 150,
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