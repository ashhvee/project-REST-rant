const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className = 'inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className = 'inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐­'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
    )
    return (
        <Def>
            <main>
                <div className = 'row'>
                <div className = 'col-sm-6'>
                    <img src = '/images/Pancakes.jpg' alt = 'pancakes' />
                <div className='col-sm-6'>
                <h1> {data.place.name} </h1>
                <h2>Rating:</h2>
                    {rating}
                <h2>Description:</h2>
                <h4>Located in {data.place.city}, {data.place.state}</h4>
                <h4>Serving {data.place.cuisines}</h4>
                <br />
                </div>
                <h2>Comments</h2>
                    {comments}
                <form action = {`/places/${data.place.id}/comment`} method = 'POST' >
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
                    <label htmlFor = 'stars'>Star Rating</label>
                        <input
                            type = 'number'
                            name = 'stars'
                            id = 'stars'
                            min = '0'
                            max = '5'
                            step = '0.5'
                        />
                    <input type = 'submit' value = 'comment' />
                </form>
                </div>
                <div className = 'border col-sm-4'>
                        <h2 className = 'rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                        <h4>{c.content}</h4>
                        <h3>
                            <strong>- {c.author}</strong>
                        </h3>
                        <h4>Rating: {c.stars}</h4>
                    </div>
                <a href = {`/places/${data.place.id}/edit`} className = 'btn btn-warning'>
                    Edit
                </a>
                <form method = 'POST' action = {`/places/${data.place.id}?_method=DELETE`}>
                    <button type = 'submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </div>
        </main>
    </Def>
    )
}}


module.exports = show