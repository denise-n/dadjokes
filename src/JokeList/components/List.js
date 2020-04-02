import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 90%;
    background-color: white;
    align-self: center;
    overflow: scroll;
    width: 70%;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
    z-index: 2;
`

export function List({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
