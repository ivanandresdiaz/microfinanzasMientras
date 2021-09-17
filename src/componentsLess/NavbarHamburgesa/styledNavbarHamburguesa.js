import styled from 'styled-components';

export const ButtonDownLoadCurriculum = styled.button`
  justify-self: flex-end;
  margin-right: 10vw;
  background-color: #FF8906;
  color: white;
  width: 129px;
  height: 48px;
  border: none;
`;

export const ModalContainer = styled.div`
  width:50px;
  height:50px;
`;
export const NavHamburgerContainer = styled.nav`
  display: grid;
  grid-template-columns: 20% 30% 50%;
  justify-items: center;
  align-items: center;
  height: 100%;
`;

export const HeaderStyled = styled.header`
  width:100%;
  height:88px;
  background-color: #0F0E17;
`;
export const H1White = styled.h1`
  color: white;
  padding-left: 10px;
`;
export const IconHamburgerContainer = styled.div`
  display: flex;
  background-color:white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  height:55px;
  width:55px;
  border-radius:50%;
  position: fixed;
  z-index:1000;
  top: 17px;
  left: 5%;
`;
export const DivModalLogo = styled.div`
  display: flex;
  align-items: center;
`;
export const DivModalLayoutNav = styled.div`
display: grid;
align-items: center;
padding-left: 5%;
height:100vh;
width:100%;
grid-template-rows: 15% 10% 10% 10% 10%;
`;
export const AItemNav = styled.a`
text-decoration: none;
color: #A7A9BE;
font-size:2.5rem;
&:hover {
    color:  #FF8906; 
  }

`;
