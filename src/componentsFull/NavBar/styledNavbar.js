/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { media } from '@mediaquery';
import { colors } from '@colors';

export const DivContainerNav = styled.header`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  ${media.desktop}{
    grid-template-columns: 5% 95%;
  }
  background-color: white;
  font-size: 1.6rem;
  height:80px;
  img{
    margin-left:1vw ;
    justify-self: flex-start;
    height: 55px;
    width: auto;
  }
  
`;
export const DivImg = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  h2{
    ${media.desktop}{
      display: none;
    }
    margin-left: 5px;
    color:${colors.orange};
    font-family: 'Ubuntu';
    font-size: 1.8rem;
    font-weight: 300;
  }

`;

export const DivContainerHamburguer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div{
    margin:0 40px 0 20px;
  }
  ${media.desktop}{ 
    display: none;
  }
`;
export const DivItemsNav = styled.nav`
  display: none;
${media.desktop}{ 
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  a{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${colors.black};
  }
  ul{
    display: grid;
    height:70px;
    grid-template-columns: 12% 12% 16% 14% 14% 15% 17%;
    align-items: center;
    list-style: none;
    li{
      padding: 10px;
      font-size:1.4rem;
      :hover{
        color:${colors.orange};
      border: 1px solid ${colors.orange};
      border-radius: 30px;
      }
    }
    
  }
  
  }
`;

export const LiCreditos = styled.div`
font-weight: 700;
padding: 10px;
      font-size:1.4rem;
:hover{
        color:${colors.orange};
      border: 1px solid ${colors.orange};
      border-radius: 30px;
      }
`;
export const SpanSolicitarCredito = styled.span`
    padding: 10px;
    border: 1px solid ${colors.orange};
    border-radius: 30px;
    background-color: ${colors.orange};
    color:${colors.white};
    :hover{
      box-shadow: ${colors.boxShadow};
      background-color:${colors.orangeHover};
    }
`;
export const SpanIniciarSesion = styled.span`
  padding: 10px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.borderGray};
  border-radius: 30px;
  color:${colors.blackHover};
  p{
    margin: 0 5px;
  }
  :hover{
    box-shadow: ${colors.boxShadow};
    border: 1px solid ${colors.orange};
    background-color:${colors.orange};
    color:${colors.white};
  }
`;

