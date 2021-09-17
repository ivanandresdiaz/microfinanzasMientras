/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { media } from '@mediaquery';
import { colors } from '@colors';

export const DivContainerImgIniciaHoy = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
   ${media.table}{
    height: 300px;
  }
  position: relative;
`;

export const DivContainerHero = styled.div`
position: relative;
/* display: flex;
  flex-direction: column-reverse;
${media.desktop}{
  display: block;
  
  } */

`;

export const DivLogoWhatsapp = styled.div`
position: fixed;
bottom: 80px;
right: 80px;
z-index: 100;
background-color:${colors.white};
border-radius: 50%;
padding: 2px;
:hover{
  filter: brightness(110%);
  transition:all 100ms ease-in-out;
  transform: scale(1.1);
}

`;
// export const DivCloseWhatsap = styled.div`
// position: relative;
// div{
//   width: 50;
//   position: absolute;
//   background-color: ${colors.grey};
//   top: -50px;
//   right: -50px;
//   border-radius: 50%;
// }
// `;
