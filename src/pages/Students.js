import React, { Fragment } from 'react'
import StudentList from '../shared/components/StudentList';
import '../sass/_base.scss'


const Students = () =>{
    
    const STUDENTS = [{
        id: "s1",
        name: "Joe Rogan",
        level: "8/10",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
        },
    },
    {
        id: "s1",
        name: "Joe Rogan",
        level: "8/10",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
        },
    },
    

];
    return(
        <Fragment>
        {/*<Search peoples = {STUDENTS}*/}
        <StudentList items = {STUDENTS} />
        </Fragment>
    );
};
export default Students;