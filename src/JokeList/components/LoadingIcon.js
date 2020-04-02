import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

h1 {
    margin-top: 12%;
    color: #7e57c2;
    font-weight: 300;
    font-size: 3rem;
    letter-spacing: 0.6rem;
    
}

.container {
	width: 200px;
	height: 100px;
	padding-top: 100px;
	margin: 0 auto;
}

.ball {
	width: 10px;
	height: 10px;
	margin: 10px auto;
	border-radius: 50px;
}

.ball:nth-child(1) {
	background: #9575cd;
	-webkit-animation: right 1s infinite ease-in-out;
	-moz-animation: right 1s infinite ease-in-out;
	animation: right 1s infinite ease-in-out;
}

.ball:nth-child(2) {
	background: #9575cd;
	-webkit-animation: left 1.1s infinite ease-in-out;
	-moz-animation: left 1.1s infinite ease-in-out;
	animation: left 1.1s infinite ease-in-out;
}

.ball:nth-child(3) {
	background: #9575cd;
	-webkit-animation: right 1.05s infinite ease-in-out;
	-moz-animation: right 1.05s infinite ease-in-out;
	animation: right 1.05s infinite ease-in-out;
}

.ball:nth-child(4) {
	background: #9575cd;
	-webkit-animation: left 1.15s infinite ease-in-out;
	-moz-animation: left 1.15s infinite ease-in-out;
	animation: left 1.15s infinite ease-in-out;
}

.ball:nth-child(5) {
	background: #9575cd;
	-webkit-animation: right 1.1s infinite ease-in-out;
	-moz-animation: right 1.1s infinite ease-in-out;
	animation: right 1.1s infinite ease-in-out;
}

.ball:nth-child(6) {
	background: #9575cd;
	-webkit-animation: left 1.05s infinite ease-in-out;
	-moz-animation: left 1.05s infinite ease-in-out;
	animation: left 1.05s infinite ease-in-out;
}

.ball:nth-child(7) {
	background: #9575cd;
	-webkit-animation: right 1s infinite ease-in-out;
	-moz-animation: right 1s infinite ease-in-out;
	animation: right 1s infinite ease-in-out;
}

@-webkit-keyframes right {
	0% {
		-webkit-transform: translate(-15px);
	}
	50% {
		-webkit-transform: translate(15px);
	}
	100% {
		-webkit-transform: translate(-15px);
	}
}

@-webkit-keyframes left {
	0% {
		-webkit-transform: translate(15px);
	}
	50% {
		-webkit-transform: translate(-15px);
	}
	100% {
		-webkit-transform: translate(15px);
	}
}

@-moz-keyframes right {
	0% {
		-moz-transform: translate(-15px);
	}
	50% {
		-moz-transform: translate(15px);
	}
	100% {
		-moz-transform: translate(-15px);
	}
}

@-moz-keyframes left {
	0% {
		-moz-transform: translate(15px);
	}
	50% {
		-moz-transform: translate(-15px);
	}
	100% {
		-moz-transform: translate(15px);
	}
}

@keyframes right {
	0% {
		transform: translate(-15px);
	}
	50% {
		transform: translate(15px);
	}
	100% {
		transform: translate(-15px);
	}
}

@keyframes left {
	0% {
		transform: translate(15px);
	}
	50% {
		transform: translate(-15px);
	}
	100% {
		transform: translate(15px);
	}
}
`

export function LoadingIcon() {
    return (
        <Wrapper className="loading">
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
            </Wrapper>
    )
}
