import React from 'react'

function Book(props) {

    const { name, title, img, children } = props

    return (
        <div>
            <div>Book</div>
            <div>{name}</div>
            <div>{title}</div>
            <img src={img} alt=''/>
            <p>{children}</p>
        </div>
    )
}

export default Book