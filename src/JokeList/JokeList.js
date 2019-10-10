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
            jokes: JSON.parse(window.localStorage.getItem('jokes')) || [],
            loading: false
        }
    }

    componentDidMount () {
        if(this.state.jokes.length === 0) this.getJokes()
    }

    handleClick = () => {
        this.setState({loading: true}, this.getJokes)
    }

    getJokes = async () => {
        const { numJokes } = this.props
        let jokes = []
        for (let i = 0; i < numJokes; i++) {
            let response =  await axios.get('https://icanhazdadjoke.com/', 
                {headers: {Accept: 'application/json'}})
            jokes.push({text: response.data.joke, id: response.data.id, votes: 0})
        }
        this.setState(prevState => ({jokes: [...prevState.jokes, ...jokes], loading: false}),
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        )
    }

    handleVote = (id, change) => {
        this.setState(prevState => ({
            jokes: prevState.jokes.map(j => j.id === id ? {...j, votes: (j.votes + change)} : j )
        }),
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        ) 
    }

    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt=""/>
                    <button 
                        onClick={this.handleClick}
                        className="JokeList-getmore"
                        disabled={this.state.loading}
                    >New Jokes
                    </button>
                </div>
                <div className="JokeList-jokes">
                    {this.state.loading 
                        ? <div className="loading">
                            <div className="container">
                                <div className="ball"></div>
                                <div className="ball"></div>
                                <div className="ball"></div>
                                <div className="ball"></div>
                                <div className="ball"></div>
                                <div className="ball"></div>
                                <div className="ball"></div>
                            </div>
                            <h1>Loading</h1>
                        </div>
                        : this.state.jokes.map(
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
