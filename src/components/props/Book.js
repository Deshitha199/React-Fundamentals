import React from 'react'

function Book(props) {

    const style = {
        width: '500px',
        height:'350px'
    }

    const { name, title, img, children } = props

    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello')
    }

    const complexHandler = (name) => {
        // console.log('complexHandler');
        console.log(name);
    }

    return (
        <div>
            <div>Book</div>
            <div>{name}</div>
            <div onClick={() => console.log(title)}>{title}</div>
            <img style={style} src={img} alt=''/>
            <p>{children}</p>
            <button type='button' onClick={clickHandler}>test click</button>
            <button type='button' onClick={() => complexHandler(title)}>complex test click</button>
        </div>
    )
}

export default Book