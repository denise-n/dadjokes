import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    getColour = () => {
        const {votes} = this.props
        if (votes >= 15) {
            return '#4CAF50'
        } else if (votes >= 12) {
            return '#8BC34A'    
        } else if (votes >= 9) {
            return '#CDDC39'
        } else if (votes >= 6) {
            return '#FFEB3B'
        } else if (votes >= 3) {
            return '#FFC107'
        } else if (votes >= 0) {
            return '#FF9800'
        } else {
            return '#F44336'
        }
    }

    getEmoji = () => {
        const {votes} = this.props
        if (votes >= 15) {
            return 'em em-rolling_on_the_floor_laughing'
        } else if (votes >= 12) {
            return 'em em-laughing'    
        } else if (votes >= 9) {
            return 'em em-smiley'
        } else if (votes >= 6) {
            return 'em em-slightly_smiling_face'
        } else if (votes >= 3) {
            return 'em em-neutral_face'
        } else if (votes >= 0) {
            return 'em em-confused'
        } else {
            return 'em em-angry'
        }
    }

    render() {
        const { handleVote, id, votes, text } = this.props
        const styles = {
            border: `2px solid ${this.getColour()}`
        }
        return (
            <div className="Joke">
                <div className="Joke-btns">
                    <div className="arrow" onClick={() => handleVote(id, 1)}>
                        <i className="fas fa-arrow-up" />   
                    </div>
                    <span style={styles}>{votes}</span>
                    <div className="arrow" onClick={() => handleVote(id, -1)}>
                        <i className="fas fa-arrow-down" />
                    </div>
                </div>
                <div className="Joke-text">
                    <h3>{text}</h3>
                </div>
                <div className="Joke-emoji">
                <i className={this.getEmoji()}></i>
                </div>
            </div>
        )
    }
}

export default Joke
