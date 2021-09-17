import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerPreguntasFrecuentes = styled.div`
width: 90%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${media.desktop}{
  width: 60%;
  align-items: flex-start;
}
margin: 40px auto;
h3{
  align-self: center;
  text-align: center;
  font-size: 4rem;
  color: ${colors.orange};
  margin: 20px 0;
}
`;

export const DivContainerRows = styled.div`
display: grid;
grid-auto-flow: row;
align-items: center;
width: 100%;
`;
