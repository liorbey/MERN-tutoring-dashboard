import React, { Fragment, Link } from 'react'
import StudentList from '../components/StudentList';
import '../sass/_base.scss'
import TotalStudents from '../components/TotalStudents';
import TopNav from '../navigation/TopNav';
import Search from '../components/Search';

const Students = () =>{
    const people = [
        "Siri",
        "Alexa",
        "Google",
        "Facebook",
        "Twitter",
        "Linkedin",
        "Sinkedin"
      ];

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