import React, {useState} from 'react';
import Modal from '../UI/Modal';
import Map from '../components/Map';

const StudentItem = props =>{
    const [showMap, setShowMap] = useState(false);
  
    const openMapHandler = () => setShowMap(true);
  
    const closeMapHandler = () => setShowMap(false);

    return(
        <React.Fragment>
            <Modal
            show={showMap}
            header={props.address}
            footer={<button onClick={closeMapHandler}>CLOSE</button>}
        >

            <div style = {{  height: "25rem", width: "100%"}}>
            <Map center={props.location} zoom={16} />     
            </div>
            </Modal>
        
            <div className="student">
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
                <button className="btn-inline" onMouseEnter={openMapHandler}>{props.address}</button>
            </div>

            <div className="student__rating">
                <div className="student__rating-average">{props.level}</div>
                <div className="student__rating-count">level</div>
            </div>
            </div>
        </React.Fragment>
    );
};

export default StudentItem