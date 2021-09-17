import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerContactanos = styled.div`
width: 80%;
margin: 0 auto;
`;
export const DivHeaderContactanos = styled.div`
  display: flex;
flex-direction: column;
align-items: center;
color:${colors.black};
h3{
  text-align: center;
  font-size:3rem;
}
p{
  text-align: center;
  font-size:1.6rem;
}

`;

export const DivContainerCardsContactanos = styled.div`
  ${media.desktop}{
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    
  }
`;

