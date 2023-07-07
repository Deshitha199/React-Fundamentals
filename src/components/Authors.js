import React from 'react'

function Authors(props) {

    const {id, name, author} = props.author
  return (
    <div>
          <h1>{id}</h1>
          <h5>{name}</h5>
          <h5>{author}</h5>
    </div>
  )
}

export default Authors