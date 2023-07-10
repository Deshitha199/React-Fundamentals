import React, {useState} from 'react'

function UseState() {

    const [title, setTitle] = useState("Random Title");

    const clickHandler = () => {
        if( title === "Random Title"){
            setTitle("New Title");
        }
        else {
            setTitle("Random Title")
        }
    }

    return (
        <React.Fragment>
            <h2 className='sub-title'>01. Error Message</h2>
            <h2>{title}</h2>
            <button type='button' onClick={() => clickHandler()}>Change the title</button>
        </React.Fragment>
    )
}

export default UseState