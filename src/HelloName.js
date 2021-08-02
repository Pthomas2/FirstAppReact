import React from 'react';
import './Card.css';

const HelloName = (props) => {

    return (
        <div>
            <h1 className="hello">Hello {props.name}</h1>
        </div>
    );
};

export default HelloName;