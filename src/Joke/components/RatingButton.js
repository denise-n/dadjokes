import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    margin-right: 1rem;
    align-items: center;
    justify-content: center;
    width: 15%;

    span {
        margin: 5px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid black;
        border-radius: 50%;
        font-size: 1.5rem;
        box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);
    }

  
`

export function RatingButton({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
