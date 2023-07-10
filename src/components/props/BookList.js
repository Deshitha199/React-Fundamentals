import React from 'react'
import Book from './Book'
import Authors from './Authors'

const vehicle1 = {
    name: 'ford mustang 1969 eleanor',
    title: 'The Ford Mustang 1969 Eleanor is a highly sought-after and iconic vehicle that gained fame through its appearance in the movie "Gone in 60 Seconds" released in 2000.',
    img: 'https://i.pinimg.com/564x/2a/ce/61/2ace6106877ae05edaf5b0a7a8e4e8dc.jpg',
}

const vehicle2 = {
    name: ' mustang 1969 eleanor',
    title: ' Eleanor is a highly sought-after and iconic vehicle that gained fame through its appearance in the movie "Gone in 60 Seconds" released in 2000.',
    img: 'https://media.ed.edmunds-media.com/mercedes-benz/maybach/2022/oem/2022_mercedes-benz_maybach_sedan_s-680-4matic_fq_oem_2_1600.jpg',
}

const vehicles = ['jhon', 'smith', 'david', 'ravi'];

const cars = ['audi', 'ferrari', 'lambogini', 'alfa romeo']

const vehicleArray = vehicles.map((vehicle, index) => {
    return <h2 key={index}>{vehicle}</h2>
})

const authors = [
    {
        id: 1,
        name: ' harry potter 1',
        author: 'J K Rolling'
    },
    {
        id: 2,
        name: ' harry potter 2',
        author: 'J K Rolling'
    },
    {
        id: 3,
        name: ' harry potter 3',
        author: 'J K Rolling'
    },
    {
        id: 4,
        name: ' harry potter 4',
        author: 'J K Rolling'
    },
    {
        id: 5,
        name: ' harry potter 5',
        author: 'J K Rolling'
    }
]

function BookList() {
    return (
        <div>
            BookList
            <Book img={vehicle1.img} name={vehicle1.name} title={vehicle1.title}>
                    <>
                        Some content in this message has been blocked because the sender isn't in your Safe senders list. I trust content from noreply+228311eb682e7a8df45786631228a20142b25e287dcabdaff4834dd2@am.atlassian.com.
                        Show blocked content
                    </>
                

            </Book>
            <Book img={vehicle2.img} name={vehicle2.name} title={vehicle2.title} />

            <div>{vehicleArray}</div>
            <div>{cars.map((car, index) => { return (<h1 key={index} >{car}</h1>) })}</div>



            {/* ======================================================================  */}

            <div>{authors.map((author) => {
                return (
                    <div key={author.id}>
                        <h1>{author.id}</h1>
                        <h3>{author.name}</h3>
                        <h3>{author.author}</h3>
                    </div>
                )
            })}</div>

            <div>{authors.map((author) => {
                return (
                    <div key={author.id}>
                        <Authors {...author}></Authors>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default BookList