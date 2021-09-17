import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerTestimonio = styled.div`
width: 100%;
margin: 100px 0;
`;

export const DivHeaderTestimonio = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
color:${colors.black};
color:${colors.black};
h3{
  padding:0 10px;
  text-align: center;
  font-size:3rem;
}
p{
  padding:0 10px;
  text-align: center;
  font-size:1.6rem;
}
`;
export const DivContainerCardsTestimonios = styled.div`
width: 80%;
margin: 20px auto;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
${media.desktop}{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
`;
