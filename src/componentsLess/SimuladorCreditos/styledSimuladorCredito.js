import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const HighestContainerSimuladorCreditos = styled.div`
position: relative;
/* margin: 150px 0; */
`;

export const DivContainerSimuladorCreditos = styled.div`
margin: 50px 0;
display: flex;
flex-direction: column;
align-items: center;
${media.desktop}{ 
  display: grid;
  grid-template-columns: 40% 60%;
};
`;
// export const DivSeparador1 = styled.div`
// width: 100%;

// position: absolute;
// top: -200px;
// z-index:1;
// left: 0;
// display: flex;
// justify-content: center;
// `;
export const DivCreditosPopulares = styled.div`
width: 90%;
margin: 0 auto;
color: ${colors.black};
text-align: center;
img{ 
  width:150px;
  height:150px;
  border-radius: 50%;
}
h3{
  margin: 20px 0;
  font-size:2rem;
  font-weight:700;
}
p{
  font-size:1.4rem;
  
  }
  margin-bottom:30px;
${media.desktop}{ 
  width: 100%;
  img{ 
  width:200px;
  height:200px;
  border-radius: 50%;
}
h3{
  margin: 30px 0;
  font-size:2.5rem;
  font-weight:700;
}
p{
  font-size:2rem;
  
  }
  margin-bottom:0;
};

`;

