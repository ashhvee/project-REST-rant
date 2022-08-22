const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div>
                    <img src = '/images/Pancakes.jpg' alt = 'pancakes' />
                </div>
                <h1> {data.place.name} </h1>
                <h2>Rating</h2>
                <h2>Description</h2>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <br />
                <h4>Comments</h4>
                    <p>No comments yet!</p>
                <a href = {`/places/${data.id}/edit`} className = 'btn btn-warning'>
                    Edit
                </a>
                <form method = 'POST' action = {`/places/${data.id}?_method=DELETE`}>
                    <button type = 'submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show