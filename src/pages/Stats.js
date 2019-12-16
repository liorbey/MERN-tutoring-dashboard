import React, { Fragment } from 'react'
import '../sass/_base.scss'
import '../components/TotalStudents'
import TotalStudents from '../components/TotalStudents'
const Stats = () =>{
    return(
        <Fragment>
        <main className="student-view">
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                </p>
                <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
                <ul className="list">
                    
                </ul>
                <div className="recommend">
                    <p className="recommend__count">
                    Accusantium cumque
                    </p>
                    <div className="recommend__friends">

                    </div>
                </div>
            </div>

            <div className="user-views">
                <figure className="view">
                    <blockquote className="view__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>

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