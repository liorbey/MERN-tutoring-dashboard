import React, { Fragment } from 'react';
import StudentItem from './StudentItem';

const StudentList = props =>{
   
    if (props.res.length === 0) {
        return(<p>No Students Found!!</p>);
    }
    return(
        <Fragment>
        <main className="student-view">
            {props.res.map( student=>(
                <StudentItem
                key={student.id}
                id={student.id}
                name = {student.name}
                subject = {student.subject}
                level = {student.level}
                address = {student.address}
                location = {student.location}/>
            ))}
        </main>
        </Fragment>
    );
};

export default StudentList