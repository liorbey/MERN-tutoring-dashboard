import React from 'react';
import StudentItem from '../components/StudentItem';

const StudentList = props =>{
    if (props.items.length === 0) {
        return(<p>No Students Found!!</p>);
    }
    return(

        <main class="hotel-view">
            {props.items.map( student=>(
                <StudentItem
                key={student.id}
                id={student.id}
                name = {student.name}
                level = {student.level}
                location = {student.location}/>
            ))}

        </main>
    );
};
export default StudentList