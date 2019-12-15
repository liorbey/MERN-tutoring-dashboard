import React from 'react'
import StudentList from '../components/StudentList';
import '../sass/_base.scss'
const Students = () =>{
    const STUDENTS = [{
        id: "s1",
        name: "Joe Rogan",
        level: "8/10",
        location: "NYC"

    },
    {
        id: "s2",
        name: "Roe Jogan",
        level: "7/10",
        location: "Brooklyn"
    }

];
    return(
        <StudentList items = {STUDENTS} />
    );
};
export default Students;