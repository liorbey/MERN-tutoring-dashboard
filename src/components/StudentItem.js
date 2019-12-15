import React from 'react';

const StudentItem = props =>{
    return(

        <div class="student">
        <h1 class="student__heading">
            {props.name}
        </h1>

        <div class="student__icons">
            <svg class="student__icon">
                <use xlinkHref="img/sprite.svg#icon-embed2"></use>
            </svg>
            <svg class="student__icon">
                <use xlinkHref="img/sprite.svg#icon-calculator"></use>
            </svg>
            <svg class="student__icon">
                <use xlinkHref="img/sprite.svg#icon-terminal"></use>
            </svg>
            <svg class="student__icon">
                <use xlinkHref="img/sprite.svg#icon-steam"></use>
            </svg>
        </div>
        <div class="student__location">
            <svg class="student__icon-location">
                <use xlinkHref="img/sprite.svg#"></use>
            </svg>
            <button class="btn-inline">{props.location}</button>
        </div>

        <div class="student__rating">
            <div class="student__rating-average">{props.level}</div>
            <div class="student__rating-count">level</div>
        </div>
    </div>
    );
};

export default StudentItem