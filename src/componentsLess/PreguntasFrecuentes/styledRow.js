/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { colors } from '@colors';
import { media } from '@mediaquery';

export const DetailsRow = styled.details`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size:1.6rem;
summary{
  position: relative;
  z-index:2;
  width: 100%;
  height: 70px;
  cursor: pointer;
  ${media.tablet}{
    height: 50px;
  }
  
  display: flex;
  align-items: center;
  color:${colors.black};
  border-radius: 5px;
  background-color: ${({ active }) => (active ? '#F38B00' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#231f20')};
  :hover {
    background-color: ${colors.orange};
    color: white;
  }
}
.content{
  position: relative;
  z-index:1;
    padding: 40px;
    margin-top: -10px;
    background-color: ${colors.white};
    border-radius: 25px;
  }
`;
export const DivIconInfo = styled.div`
margin: 0 10px;
`;
