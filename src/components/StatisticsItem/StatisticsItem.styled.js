import styled from 'styled-components';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } 

export const StatItem = styled.li`
padding: 10px;
display:flex;
flex-direction: column;
background-color: ${getRandomHexColor};
width: 100%;
border: 1px solid lightgray;
text-align:center;
`

export const Label = styled.span`
color: white;
`
export const Percentage = styled.span`
font-size: 22px;
color: white;
margin-top: 5px;
`