import React from "react";

const names = [
    {
        id: 1,
        name: 'kasun'
    },
    {
        id: 2,
        name: 'supun'
    },
    {
        id: 3,
        name: 'daham'
    },
    {
        id: 4,
        name: 'pathum'
    },
    {
        id: 5,
        name: 'nadun'
    },

]

function UseStateArray() {

    const [list, setList] = React.useState(names);

    const removeItem = (id) => {
        let newList = list.filter((item) => item.id !== id)
        setList(newList)
    }


    return (
        <React.Fragment>
            <h2 className='sub-title'>02. UseState Array</h2>
            <div className="list">
                {list.map((item) => {
                    const {id, name} = item;
                    return (
                        <div key={id} className="list-item">
                            {name}
                            <button style={{ backgroundColor: '#0564a3', float: 'right' }} onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
            <button type='button' onClick={() => setList([])}>Remove List</button>
        </React.Fragment>
    )
}

export default UseStateArray;