import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
`

export function Arrow({children, onClick}) {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )
}
