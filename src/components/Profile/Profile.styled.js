import styled from 'styled-components';


export const Wrapper = styled.div`
margin-top: 30px;
width:400px;
border: 1px solid lightgray;

display: flex;
flex-direction: column;

`

export const Description = styled.div`
padding: 20px;
text-align:center;
`

export const Avatar = styled.img`
display: block;
width: 40%;
border-radius: 50%;
border: 1px solid lightgray;
margin: 0 auto;
`
export const Name = styled.p`
font-weight: bold;
`
export const Stats = styled.ul`
display: flex;
justify-content: space-between;
list-style: none;

padding: 0;
margin: 0;

`
export const StatCard = styled.li`
width: 100%;
border: 1px solid lightgray;
display: flex;
flex-direction: column;
text-align:center;
`

export const Info = styled.p`
color: grey;
`
export const Label = styled.p`
color: grey;
font-size: 15px;
`

export const Quantity = styled.p`
font-weight: bold;
`

