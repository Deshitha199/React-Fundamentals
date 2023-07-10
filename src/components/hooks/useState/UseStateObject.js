import React, {useState} from 'react'

const car = {
    id: 1,
    img: 'https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/overview/pfa/2024-nissan-gt-r-sports-car-light-green-side-profile-view-m.jpg',
    title: 'New 2024 Nissan GT-R',
    horsePower: '565hp',
    torque: '467lb-ft',
    status: 'For Sell'
}

function UseStateObject() {

    const [vehicle, setVehicle] = useState(car)

    const ClickHandler = () => {
        setVehicle({...vehicle, status: 'Sold'})

    }
    return (
        <React.Fragment>
            <h2 className='sub-title'>03. UseState Array</h2>
            <div className='car-model'>
                <h2>{vehicle.title}</h2>
                <img src={vehicle.img} alt='' />
                <h3> horse Power: {vehicle.horsePower}</h3>
                <h3>Torque: {vehicle.torque}</h3>
                <h3>Status: {vehicle.status}</h3>
                <button type='button' onClick={ClickHandler}>Buy</button>
            </div>
        </React.Fragment>
    )
}

export default UseStateObject;