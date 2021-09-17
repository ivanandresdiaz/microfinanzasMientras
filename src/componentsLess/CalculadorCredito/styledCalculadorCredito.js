import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const FormContainerCalculador = styled.form`
position: relative;
box-shadow: 10px 10px 100px 0px #00000040;
z-index:1;
  width: 90%;
  margin: 0 auto;
  background-color: ${colors.blue};
  border-radius: 32px;
  color: ${colors.white};
  height:500px;
  padding: 10px;
  overflow: hidden;
  div{
    width: 100%;
  }
  h2{
    padding: 10px 20px;
    font-size:2.5rem;
    font-weight: 600;
  }
 
  label{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size:1.4rem;
    color:${colors.white};
    padding-left: 10px;
    ${media.desktop}{
      
      padding-left: 10px;
    }
  }
  button{
    height:50px;
    margin-top:20px;
    width:260px;
    border-radius: 25px;
    background-color: ${colors.white};
    color:${colors.black};
    font-weight: 600;
    font-size:2rem;
    border: none;
    box-shadow: ${colors.boxShadow};
    
    :hover{
      color:${colors.white};
      background-color: ${colors.orange};
    }
  }
  ${media.tablet}{
    font-size:3rem;
      padding: 22px;
    width: 80%;
    /* h2{
      padding: 0;
    } */
  }
  ${media.desktop}{
    font-size:3.5rem;
      padding: 42px;
    width: 80%;
    h2{
      padding: 0;
    }
  }
`;
export const DivContainerPrestamo = styled.div`
display: flex;
justify-content:flex-start;
align-items:center;
background-color:${colors.white};
color: ${colors.black};
border-radius: 40px;
padding: 0 20px;
max-width:402px;
width:100%;
input,p{
    background-color:transparent;
    font-size:3rem;
    font-weight: 700;
    max-width:350px;
    width:100%;
    height: 40px;
    border: none;
    color: ${colors.black};
  }
  input{
    outline: none;
  }
  span{
    font-size:1.4rem;
    font-weight: 700;
    margin:0 5px ;
  }
  p{
    cursor: pointer;
  }
  ${media.desktop}{
    span{
    font-size:2.4rem;
    font-weight: 700;
    margin:0 10px ;
  }
    input,p{
  font-size:4rem;
  font-weight: 700;
  max-width:350px;
  width:100%;
  height: 60px;
}
  }
`;
export const PPrestamo = styled.p`
font-size:1.4rem;
padding-left: 10px;
margin-bottom: 10px;
    ${media.desktop}{
      padding-left: 0px;
font-size:1.6rem;
    color:${colors.white};
    }
`;
export const DivContainerCuotas = styled.div`
display: grid;
width: 100%;
min-height: 100px;
margin-top: 10px;
max-width:300px;
grid-template-columns: 50% 50%;
gap: 5px;
${media.desktop}{
  gap: 10px;
  margin-top: 20px;
}

`;
export const DivCuota = styled.div`
  span{
    font-size:1.4rem;
    font-weight: 700;
    margin:0 5px ;
  }
  padding: 10px;
  border-radius: 25px;
  :hover{
    color:${colors.black};
    background-color: ${colors.white};
  }
`;
export const DivContainerHeaderCuota = styled.div`
display: flex;
/* margin-top: -10px; */
  justify-content: flex-start;
  max-width:300px;
  width:100%;
  height: 40px;
  p{
    font-size:2rem;
    font-weight: 700;
    max-width:300px;
    width:100%;
    height: 50px;
    /* color: ${colors.white}; */
  };
  ${media.desktop}{
    font-size:2.5rem;
  }
`;
export const DivDescriptionCuota = styled.div`
margin-top:-10px;
`;
export const PCuota = styled.p`
font-size: 1.6rem;
/* color:${colors.white}; */
margin-left: 10px;
${media.desktop}{
  font-size: 2rem;
  margin-left: 20px;
}

`;
export const PDescuento = styled.div`
font-size: 1rem;
line-height: 0.5rem;
color:${colors.black};
margin-left: 10px;
${media.desktop}{
  margin-left: 20px;
}
`;
export const DivContainerLogoBlanco = styled.div`
position: absolute;
top: 0;
left: 0;
width:100%;
height:100%;
z-index:-1;
display: flex;
align-items: flex-end;
justify-content: flex-end;
img{
  width: 30vw;
  height: auto;
}
${media.desktop}{
  img{
  width: 25vw;
  height: auto;
}
}
`;
