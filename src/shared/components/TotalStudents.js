import React from 'react'

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
        <h1>total students: {DUMMY_ARRAY.length}</h1>
    );
};

export default TotalStudents;