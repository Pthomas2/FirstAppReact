import React, { useState} from 'react';

const FontSize = (props) => {

    const [counter, setCounter] = useState(12);

    return (
        <div>
            <div className="hello" style={{ fontSize: counter, margin: 20 }}>
                <p>This paragraph has a font-size of {counter} px</p>
                <button className="btn btn-primary"
                        onClick={ () => setCounter(counter + 1)} >
                    Increment
                </button>
                <button style={{ margin: 20 }} className="btn btn-primary"
                        onClick={ () => setCounter(12)} >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default FontSize;