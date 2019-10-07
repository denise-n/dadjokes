import React, { Component } from 'react'
import './JokeList.css'
import Joke from '../Joke/Joke'
import axios from 'axios'

class JokeList extends Component {
    static defaultProps = {
        numJokes: 10
    }
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }
    }

    async componentDidMount () {
        let jokes = []
        for (let i = 0; i < this.props.numJokes; i++) {
            let response =  await axios.get('https://icanhazdadjoke.com/', 
                {headers: {Accept: 'application/json'}})
            jokes.push({text: response.data.joke, id: response.data.id, votes: 0})
        }
        this.setState({jokes: jokes})
    }

    handleVote = (id, change) => {
        this.setState(prevState => ({
            jokes: prevState.jokes.map(j => j.id === id ? {...j, votes: (j.votes + change)} : j )
        }))
    }

    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt=""/>
                    <button className="JokeList-getmore">New Jokes</button>
                </div>
                
                <div className="JokeList-jokes">
                    {this.state.jokes.map(
                        j => 
                            <Joke 
                                key={j.id}
                                id={j.id}
                                text={j.text} 
                                votes={j.votes}
                                handleVote={this.handleVote}
                            />
                            )
                        }
                </div>

            </div>
        )
    }
}

export default JokeList
