import React, { Fragment } from 'react';
import StudentItem from './StudentItem';
import TotalStudents from './TotalStudents';

const StudentList = props =>{
   
    if (props.items.length === 0) {
        return(<p>No Students Found!!</p>);
    }
    return(
        <main className="student-view">
            {props.items.map( student=>(
                <StudentItem
                key={student.id}
                id={student.id}
                name = {student.name}
                level = {student.level}
                address = {student.address}
                location = {student.location}/>
            ))}
        </main>
    );
};
export default StudentList