import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.joke}</h3>
            </div>
        )
    }
}

export default Joke
