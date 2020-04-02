import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    font-size: 2.5rem;
    margin-left: auto;
    border-radius: 50%;
    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);

    &:hover {
        animation-name: spin;
        animation-duration: 1s;
    }

    @keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	30% {
		transform: rotate(20deg);
	}
	60% {
		transform: rotate(0deg);
	}
	80% {
		transform: rotate(10deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

`

export function Emoji({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
