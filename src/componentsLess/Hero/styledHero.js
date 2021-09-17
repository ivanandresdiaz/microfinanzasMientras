/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color:white;
${media.desktop}{
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  display: grid;
  align-items: center;
  height: 70vh;
}

`;
// export const DivImgUsuarioMobile = styled.div`
// position: relative;
// :before {
//   content:'';
//   width:100%;
//   height:100%;
//   position:absolute;
//   bottom:0;
//   left:0;
//   background: linear-gradient(to top, white, transparent,transparent,transparent);
// }
// img{
//   width: 100%;
//   height: 50vh;
//   object-fit: cover;
//   object-position: center;
// ${media.tablet}{
//   object-position: top;
//   height: 60vh;
// }
// ${media.desktop}{
//   display: none;
// }
// }

// `;
export const DivWriting = styled.div`
  display: flex;
  background-color:white;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:1.6rem;
  margin-top: -40px ;
  ${media.desktop}{
    margin-top: 20px ;
    position: relative;
    z-index:5;
    background-color: transparent;
    margin-top: -60px ;
  margin-left: 6vw;
  font-size:2rem;

  justify-content: flex-start;
  align-items: flex-start;
}
  h1{
    text-align: center;
    ${media.desktop}{
      text-align:start;
    }
    color: ${colors.orange};
  }
  h2{
    /* font-size: 3rem; */
    color: ${colors.black};
    text-align: center;
    ${media.desktop}{
      text-align:start;
    }
  }
  p{
    font-size:1.6rem;
    color: ${colors.black};
    text-align: center;
    ${media.desktop}{
      font-size:2rem;
      text-align:start;
    }
  }
  a{
    margin: 20px 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    color:${colors.black};
    box-shadow:${colors.boxShadow};
    border-radius:25px;
  }
`;
export const SpanSolicitarCredito = styled.span`
    padding: 10px 20px;
    border: 1px solid ${colors.orange};
    border-radius: 30px;
    background-color: ${colors.orange};
    color:${colors.white};
    :hover{
      background-color:${colors.orangeHover};
    }
`;
export const DivContainerImg = styled.div`
justify-self:end;
max-width: 90%;
max-height: auto;
img{ 
  display: none;
  ${media.desktop}{
    width: 100%;
    display: inline-block;
  }
}
`;

export const DivLlamanos = styled.div`
p{
color: ${colors.blackHover};


font-size:1.6rem;
  }

`;
