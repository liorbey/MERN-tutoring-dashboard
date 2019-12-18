import React, {useState} from 'react';
import Modal from '../UI/Modal';

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
        <div style = {{  height: "15rem", width: "100%"}}>
{/**place map here using props.location */}
        </div>
      </Modal>
    
        <div className="student">
        <h1 className="student__heading">
            {props.name}
        </h1>

        <div className="student__icons">
            <svg className="student__icon">
                <use xlinkHref="img/sprite.svg#icon-embed2"></use>
            </svg>
            <svg className="student__icon">
                <use xlinkHref="img/sprite.svg#icon-calculator"></use>
            </svg>
            <svg className="student__icon">
                <use xlinkHref="img/sprite.svg#icon-terminal"></use>
            </svg>
            <svg className="student__icon">
                <use xlinkHref="img/sprite.svg#icon-steam"></use>
            </svg>
        </div>
        <div className="student__location">
            <svg className="student__icon-location">
                <use xlinkHref="img/sprite.svg#"></use>
            </svg>
            <button className="btn-inline" onClick={openMapHandler}>{props.address}</button>
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