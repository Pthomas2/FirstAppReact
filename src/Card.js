 import React from 'react';
 import "./Card.css";

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{display:'inline-block'}}>
                <img src={props.url} className="card=img-top" alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;



// import React, { Component } from 'react';

// class componentName extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default componentName;