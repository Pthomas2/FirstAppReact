import React, { useState, useEffect } from 'react';

const ChildComponent = (props) => {

    const [count, setCount] = useState(0);

    // when the component is mounted this run
    // will run once per the lifecycle of the component
    useEffect( () => {
        console.log("Called when mounted");

        //called when unmounted (return a function)
        return () => {
            console.log("Called when unmounted");
        }
    }, [] );

    return(
        <div className="hello" style={{ margin: 20 }}>
            <p>Count = {count}</p>
            <button className="btn btn-primary" 
                    onClick={ () => setCount(count + 1) }>
                Incr
            </button>
        </div>
    );
}


const MountUnmount = (props) => {

    const [display, setDisplay] = useState(true);

    const mounting = () => {

        if(display) {
            return <ChildComponent/>
        }
        else {
            return <p>No component</p>
        }
    }


    return (
        <div>
            { mounting(display) }

            <button className="btn btn-warning" 
                    onClick={ () => setDisplay( !display ) }>
                Mount/Unmount
            </button>
        </div>
    );
};

export default MountUnmount;