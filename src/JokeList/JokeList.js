import React, { Component } from 'react'
import styled from 'styled-components'
import './JokeList.css'
import Joke from '../Joke/Joke'
import  { LoadingIcon, SideBar, Title, Button, List } from './components/'
import axios from 'axios'

const Wrapper = styled.div`
    display: flex;
    width: 80%;
    height: 80%;

`

class JokeList extends Component {
    static defaultProps = {
        numJokes: 6
    }
    constructor(props) {
        super(props)
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes')) || [],
            loading: false
        }
        this.seenJokes = new Set()
    }

    componentDidMount () {
        if(this.state.jokes.length === 0) this.getJokes()
    }

    handleClick = () => {
        this.setState({loading: true}, this.getJokes)
        console.log('clicked')
    }

    getJokes = async () => {
        const { numJokes } = this.props
        let jokes = []
        while (jokes.length < numJokes) {
            let response =  await axios.get('https://icanhazdadjoke.com/', 
                {headers: {Accept: 'application/json'}})
            let newJokeId = response.data.id
            if (!this.seenJokes.has(newJokeId)) {
                this.seenJokes.add(newJokeId)
                jokes.push({text: response.data.joke, id: newJokeId, votes: 0})
            } else {
                console.log('duplicate joke')
            }
        }

        // getting no duplicate jokes works assuming there are no duplicates in original jokes

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
        this.state.jokes.map(j => this.seenJokes.add(j.id))
        
        return (
            <Wrapper>
                <SideBar>
                    <Title><span>Dad</span> Jokes</Title>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt=""/>
                    <Button 
                        onClick={this.handleClick}
                        disabled={this.state.loading}
                    >New Jokes
                    </Button>
                </SideBar>
                <List>
                    {this.state.loading 
                        ? <LoadingIcon />
                        : this.state.jokes.sort((a,b) => b.votes - a.votes).map(
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
                </List>
            </Wrapper>
        )
    }
}

export default JokeList
