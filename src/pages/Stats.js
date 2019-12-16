import React, { Fragment } from 'react'
import '../sass/_base.scss'
import '../components/TotalStudents'
import TotalStudents from '../components/TotalStudents'
import SubjectDist from '../components/SubjectDist'
const Stats = () =>{
    return(
        <Fragment>
        <main className="student-view">
        <div className="detail">
            <div className="description">
            <h1 style={{textAlign:'center'}}>Subject Distribution</h1>
            <SubjectDist/>
            </div>

            <div className="user-views">
                <figure className="view">
                    dscsd
                </figure>

                <figure className="view">
                <TotalStudents/>
                </figure>
            </div>
        </div>
    </main>
    </Fragment>

    );
};
export default Stats;