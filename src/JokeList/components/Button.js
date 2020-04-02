import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    font-size: 1.5rem;
    border-radius: 1.5rem;
    padding: 1rem;
    background: linear-gradient(
    135deg,
    rgba(179, 229, 252, 1) 0%,
    rgba(179, 229, 252, 1) 50%,
    rgba(240, 98, 146, 1) 50%,
    rgba(240, 98, 146, 1) 100%)
    ;
    font-weight: 700;
    color:rgb(66, 66, 66);
    border: none;
    outline: none;
    word-spacing: 1.2rem;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export function Button({children, onClick}) {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )
}
