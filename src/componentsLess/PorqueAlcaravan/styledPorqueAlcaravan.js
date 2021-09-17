import styled, { keyframes } from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerWhy = styled.div`
/* position: relative; */
display: block;
margin: 30px 0px 150px;
  background-color:white;
  color:${colors.black};
  height: auto;
  min-height:400px;
`;

export const DivWhyHeader = styled.div`
margin-bottom: 30px;
padding:30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 2.2rem;
h2{
  text-align:center;
  color:${colors.black};
  font-weight:700;
}
`;
export const DivContainerReasonsWhy = styled.div`
width: 80%;
height: auto;
  margin: 0 auto;
  display: block;
  ${media.tablet}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  ${media.desktop}{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
`;
export const DivItemReason = styled.div`
  width: 240px;
  height: 180px;
margin: 10px auto;
width: 100%;
height: 100%;
background-color:white;
/* box-shadow:${colors.boxShadow}; */
border-radius: 25px;
/* border: 2px solid ${colors.white}; */
overflow: hidden;
padding:20px;
h3{
  font-size:2rem;
  color:${colors.black};
  font-weight:600px;
}
:hover{
  /* border: 2px solid ${colors.orange}; */
    filter: brightness(110%);
  transition:all 500ms ease-in-out;
  transform: scale(1.05);
  
}
`;
export const DivLogito = styled.div`
display: flex;
margin-bottom:20px ;
align-items: center;
justify-content: center;
background-color:${colors.orange};
width:45px;
height:45px;
border-radius: 20px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
:hover{
  background-color:${colors.orangeHover};
}
`;
// export const DivContainerSeparator = styled.div`
// position:absolute;
// bottom:-200px;
// `;
