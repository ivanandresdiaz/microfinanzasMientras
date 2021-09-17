/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { colors } from '@colors';

export const DivContainerNavbarMobile = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: ${colors.boxShadow};
  img{
    margin-left: 30px;
    width: auto;
    height: 50px;
  }
`;

export const DivContainerHeaderNavbarMobile = styled.div`
display: grid;
grid-template-columns: 50% 50%;
align-items: center;
  img{
    width: 140px;
    height:auto;
  }div{
    justify-self: end;
    margin-right: 10px;
  }
`;
