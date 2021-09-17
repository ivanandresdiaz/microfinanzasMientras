import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerCardHistorias = styled.div`

height:300px;
width:100%;
max-width:300px;
display: grid;
grid-template-rows: 60% 40%;
font-size:1.4rem;
color:${colors.black};
margin: 20px auto;
border: 1px solid #DEDEDE;
border-radius: 25px;
h4{ 
  margin: 5px 0;
  font-size:1.6rem;
  font-weight:bold;
  /* padding: 0 20px ; */
}
${media.desktop}{ 
  height:300px;
  max-width:300px;
  h4{ 
  margin: 10px 0;
  font-size:1.8rem;
  font-weight:bold;
  /* padding: 0 20px ; */
}
}
:hover{
  color:${colors.orange};
  overflow:hidden;
  box-shadow: ${colors.boxShadow};
  img{
  /* border: 2px solid ${colors.orange}; */
    filter: brightness(110%);
  transition:all 500ms ease-in-out;
  transform: scale(1.05);
  
  }
}
`;

export const DivDetailsHistoria = styled.div`
display: flex;
/* padding: 0 20px ; */
`;
export const PNegrita = styled.p`
font-weight: 600;
`;
export const DivContainerWriting = styled.div`
  padding:20px;
`;
