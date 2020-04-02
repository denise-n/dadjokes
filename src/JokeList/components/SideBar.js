import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color:#9575cd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    text-align: center;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1),
    inset 0 0 25px #7e57c2;
    z-index: 2;

    img {
        width: 50%;
    }
`

export function SideBar({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

