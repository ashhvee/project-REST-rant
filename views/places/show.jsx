const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className = 'border'>
                <form action = './controllers/places.js' method = 'POST' />
                    <label htmlFor = 'author'>Author</label>
                        <input
                            type = 'text'
                            name = 'author'
                            id = 'author'
                        />
                    <label htmlFor = 'content'>Content</label>
                        <input
                            type = 'text'
                            name = 'content'
                            id = 'content'
                        />
                    <label htmlFor = 'rant'>Rant</label>
                        <input
                            type = 'checkbox'
                            name = 'rant'
                            id = 'rant'
                        />
                    <label htmlFor = 'starRating'>Star Rating</label>
                        <input
                            type = 'number'
                            name = 'starRating'
                            id = 'starRating'
                            min = '0'
                            max = '5'
                            step = '0.5'
                        />
                    <input type = 'submit' />
                    <h2 className = 'rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className = 'row'>
                <div className = 'col-sm-6'>
                    <img src = '/images/Pancakes.jpg' alt = 'pancakes' />
                </div>
                <div className='col-sm-6'>
                <h1> {data.place.name} </h1>
                <h2>Rating</h2>
                <h2>Description</h2>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <br />
                </div>
                <h2>Comments</h2>
                    {comments}
                    {/* <p>No comments yet!</p> */}
                </div>
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