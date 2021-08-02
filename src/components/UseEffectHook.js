import React, { useState, useEffect } from 'react';

const UseEffectHook = (props) => {

    // state hook
    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(true);

    // useEffect hook -> access the lifecycle states for a functional component (mount, update,unmount)
    // useEffect() -> accept a function as an argument

    // will be called ever time there is a render (mounts, updates), everytime value (counter or show) is set or changed
    

    // only called if counter is specifically updated 
    useEffect( () => {
        console.log(`Counter = ${counter}, after each update` );
    }, [counter] );



    // no guarentee that this will be called after each rerender
    //console.log("The count is " + counter);

    const showCounter = (show) => {

        if(show) {
            return (
                <div className="hello" style={{ margin: 20 }} >
                    <p>Counter: {counter}</p>
                    <button className="btn btn-primary"
                            onClick={ () => setCounter(counter + 1)} >
                        Increment
                    </button>
                </div>
            );
        }
        else {
            return <p></p>;
        }
    }
    // !true -> false, !false -> true
    return (
        <div>

            <div className="hello" style={{ margin: 20 }} >
                <p>Counter: {counter}</p>
                <button className="btn btn-primary"
                        onClick={ () => setCounter(counter + 1)} >
                    Increment
                </button>
            </div>
            
            <button className="btn btn-warning"
                    onClick={ () => setShow( !show ) }>
                Mount/UnMount
            </button>

            { showCounter(show) }
        </div>
    );
};

export default UseEffectHook;