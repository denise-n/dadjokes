import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    render() {
        return (
            <div className="Joke">
                <div className="Joke-btns">
                    <div className="arrow" onClick={() => this.props.handleVote(this.props.id, 1)}>
                        <i className="fas fa-arrow-up" />   
                    </div>
                    <span >{this.props.votes}</span>
                    <div className="arrow" onClick={() => this.props.handleVote(this.props.id, -1)}>
                        <i className="fas fa-arrow-down" />
                    </div>
                    
                </div>
                <div className="Joke-text">
                    <h3>{this.props.text}</h3>
                </div>
                <div className="Joke-emoji">
                <i className="em em-rolling_on_the_floor_laughing"></i>
                </div>
                
            </div>
        )
    }
}

export default Joke
