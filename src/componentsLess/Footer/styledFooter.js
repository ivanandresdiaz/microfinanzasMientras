import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DivContainerFooter = styled.div`
width: 100%;
padding: 20px 0;
display: block;
${media.tablet}{
  margin: 0 auto;
  display: grid;
  height: auto;
grid-template-columns: 1fr 1fr 1fr;
}

background-color:${colors.orange};
ul{
  width: 100%;
  height:100%;
  padding:0px 20px;
  color:${colors.white};
  font-size: 1.6rem;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  li{
    cursor: pointer;
    text-align: center;
    ${media.tablet}{
      text-align: start;
   
  }
  }
  ${media.tablet}{
    
    align-items: flex-start;
    padding:120px 20px;
  }
}
`;
export const DivContainerImgSierraColEcopetrol = styled.div`
width:100%; height: auto;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0;
div{
  background-color:${colors.white};
  width:80%;
  padding: 20px 0;
  display: flex;
justify-content: center;
align-items: center;
}
img{
  width:80%;
  height: auto;
}

`;
