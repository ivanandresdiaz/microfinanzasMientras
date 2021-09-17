/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerCardTestimonio = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
height:200px;
width:100%;
margin: 20px 0;
max-width:300px;
font-size:1.4rem;
color:${colors.black};
border: 1px solid #DEDEDE;
border-radius: 25px;

:hover{
    filter: brightness(90%);
  transition:all 500ms ease-in-out;
  transform: scale(1.05);
  
}
${media.desktop}{ 
  margin: 0;
  
  /* height:400px; */
  
}
:hover{
  box-shadow: ${colors.boxShadow};
}
`;
export const PTestimonio = styled.p`
font-weight: italic;
color:${colors.black};
`;
export const PNombre = styled.p`
color: ${colors.orange};
font-weight: bold;
`;
export const DivUsuario = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
img{ 
  width:50px;
  height:50px;
  margin:0 10px;

  border-radius: 50%;
}
`;
