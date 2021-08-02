import React, { useState } from 'react';

const Child = (props) => {
    return (
        <p>Value from parent in child: {props.parentValue}</p>
    );
};







const DataFlow = (props) => {
    const[parentValue, setParentValue] =useState(0);
    return (
        <div className="hello">
            <h4>Parent Value in Parent: {parentValue}</h4>
            <button className="btn btn-primary"
                    onClick={()=>{ setParentValue(parentValue + 1 )}}>Increment</button>
            <Child parentValue={parentValue} />
        </div>
    );
};

export default DataFlow;