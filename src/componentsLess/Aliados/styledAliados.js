import styled from 'styled-components';
import { colors } from '@colors';

export const DivContainerAliados = styled.div`
width: 100%;
margin: 50px 0;
`;

export const DivHeaderAliados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color:${colors.black};
h3{
  padding:0 10px;
  text-align: center;
  font-size:3rem;
  margin-bottom: 30px;
}
p{
  padding:0 10px;
  text-align: center;
  font-size:1.6rem;
}
`;
