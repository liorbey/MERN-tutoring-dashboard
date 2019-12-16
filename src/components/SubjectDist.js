import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend,
} from 'recharts';

const SubjectDist = () =>{
    const data = [
        {
          subject: 'Math Enrichment', A: 8, B: 6, fullMark: 150,
        },
        {
          subject: 'Web Development', A: 2, B: 7, fullMark: 150,
        },
        {
          subject: 'D&A with Python', A: 4, B: 6, fullMark: 150,
        },
        {
          subject: 'Arduino Robotics', A: 7, B: 4, fullMark: 150,
        },
      ];
      return(
        <RadarChart width={500} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="2019" dataKey="A" stroke="#3895D3" fill="#3895D3" fillOpacity={0.6} />
        <Radar name="2018" dataKey="B" stroke="999" fill="#999" fillOpacity={0.6} />
        <Legend/>
        </RadarChart>
      );

};

export default SubjectDist