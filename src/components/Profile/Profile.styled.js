import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px auto 0 auto;
  width: 400px;
  border: 1px solid lightgray;

  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  width: 40%;
  border-radius: 50%;
  border: 1px solid lightgray;
  margin: 0 auto;
`;
export const Name = styled.p`
  font-weight: bold;
`;
export const Info = styled.p`
  color: grey;
`;
export const Stats = styled.ul`
  background-color: aliceblue;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const StatCard = styled.li`
  width: 100%;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

export const Label = styled.p`
  color: grey;
  font-size: 15px;
  margin: 0;
`;

export const Quantity = styled.p`
  font-weight: bold;
  margin: 5px 0 0;
`;
