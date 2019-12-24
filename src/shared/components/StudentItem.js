import React, {useState, useRef,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../shared/context/Auth-Context';
import Modal from '../UI/Modal';
import Map from '../components/Map';

import '../../sass/_base.scss'

const StudentItem = props =>{
    const history = useHistory();
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const[setActiveTwo, setActiveTwoState] = useState("");
    const[setWidth, setWidthState] = useState("0px");

    const toggleAccordion = () => {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
      );  
    }
    const toggleDelete = () => {
        setActiveTwoState(setActiveTwo === "" ? "active": "")
        setWidthState(
            setActiveTwo === "active" ? "0px": `${deletion.current.scrollWidth}px`
        );
    }
    const deletion = useRef(null);
    const content = useRef(null);

    const confirmDeleteHandler = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/students/${props.id}`, {
                method: 'DELETE',
                headers:{
                  Authorization: 'Bearer ' + auth.token
                }
              });
              const responseData = await response.json();
                if(!response.ok){
                    throw new Error(responseData.message);
                }
            history.push('/');
            history.push('/students');
            props.onDelete(props.id);
        } catch (err) {}
      };


    return(
        <React.Fragment>
            <Modal
            show={showMap}
            header={<div style ={{textAlign:"center"}}>{props.address}</div>}
            footer={<button className = "add-student-form__button" onClick={closeMapHandler}>CLOSE</button>}
        >
            <div style = {{  height: "25rem", width: "100%"}}>
            <Map center={props.location} zoom={16} />     
            </div>
            </Modal>
        
            <div className="student" onDoubleClick={toggleDelete}>
            <div className={`student__accordion ${setActive}`} onMouseEnter={toggleAccordion} onMouseLeave={toggleAccordion}>
                    <h1 className="student__heading">
                        {props.name} 
                    </h1>

                    <div className="student__icons">
                        {props.subject==='python'?
                            <svg className="student__icon">
                                <use xlinkHref="img/sprite.svg#icon-embed2"></use>
                            </svg>:null
                        }
                        {props.subject==='javascript'?
                            <svg className="student__icon">
                                <use xlinkHref="img/sprite.svg#icon-terminal"></use>
                            </svg>:null
                        }
                        {props.subject==='math'?                
                            <svg className="student__icon">
                                <use xlinkHref="img/sprite.svg#icon-calculator"></use>
                            </svg>:null
                        }
                        {props.subject==='robotics'?                
                        <svg className="student__icon">
                            <use xlinkHref="img/sprite.svg#icon-steam"></use>
                        </svg>:null
                        }
                    </div>
                    <div className="student__location">
                        <svg className="student__icon-location">
                            <use xlinkHref="img/sprite.svg#"></use>
                        </svg>
                        <div className="btn-inline" onClick={openMapHandler}>{props.address}</div>
                    </div>
                    <div className="student__rating">
                        <div className="student__rating-average">{props.level}</div>
                        <div className="student__rating-count">level</div>
                    </div>
                   
                    <div onClick={confirmDeleteHandler} ref={deletion} style = {{maxWidth: `${setWidth}`}} className="student__delete">
                        <div className="student__delete-description">delete?</div>
                    </div>
                    
                </div>
            </div>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="student__accordion-content">
                <div
                    className="student__accordion-text"
                    dangerouslySetInnerHTML={{ __html: props.description }}
                />
            </div>
        </React.Fragment>
    );
};

export default StudentItem