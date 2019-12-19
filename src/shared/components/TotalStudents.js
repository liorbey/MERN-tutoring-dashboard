import React from 'react'

const TotalStudents = props =>{
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

    return(
        //length of students
        <h1>total students: {MOCKDATA.length}</h1>
    );
};

export default TotalStudents;