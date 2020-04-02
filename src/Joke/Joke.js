import React, { Component } from 'react'
import styled from 'styled-components'
import { RatingButton, Arrow, JokeText, Emoji } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './Joke.css'

const Wrapper = styled.div`
    display: flex;
    border-bottom: 2px solid #eeeeee;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    padding: 1rem;
`

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
            <Wrapper>
                <RatingButton>
                    <Arrow onClick={() => handleVote(id, 1)}>
                        <FontAwesomeIcon icon="arrow-up" />   
                    </Arrow>
                    <span style={styles}>{votes}</span>
                    <Arrow onClick={() => handleVote(id, -1)}>
                        <FontAwesomeIcon icon="arrow-down" />
                    </Arrow>
                </RatingButton>

                <JokeText>{text}</JokeText>
                
                <Emoji>
                    <i className={this.getEmoji()}></i>
                </Emoji>
            </Wrapper>
        )
    }
}

export default Joke
