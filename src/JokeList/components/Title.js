import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
    font-size: 4rem;
    margin: 2rem;
    color: white;
    font-weight: 300;
    letter-spacing: 0.6rem;
    span {
        font-weight: 700;
        letter-spacing: 0;
    }
`

export function Title({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
