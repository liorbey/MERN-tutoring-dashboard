import React from 'react'
import Students from '../pages/Students';

const TotalStudents = props =>{
    const DUMMY_ARRAY = [{
        id: "s1",
        name: "Joe Rogan",
        level: "8/10",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
        },
    }];
    return(
        //length of students
        <h1>total students count: {DUMMY_ARRAY.length}</h1>
    );
};

export default TotalStudents;