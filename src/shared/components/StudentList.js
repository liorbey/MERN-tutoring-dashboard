import React, { Fragment } from 'react';
import StudentItem from './StudentItem';
import { Link } from 'react-router-dom';

const StudentList = props =>{
   
    if (props.res.length === 0) {
        return(<div>You haven't added any students yet, add some!</div>);
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
                description = {student.description}
                creatorId={student.creator}
                location = {student.location}
                onDelete={props.onDeleteStudent}
                />
            ))}
        </main>
        </Fragment>
    );
};

export default StudentList