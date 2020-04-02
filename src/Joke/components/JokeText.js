import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h3`
    width: 75%;
    font-size: 1.2rem;
`

export function JokeText({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
