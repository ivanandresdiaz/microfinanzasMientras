import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '@colors';
import { media } from '@mediaquery';

const translateNegro = keyframes`
from{
  transform: translateX(-100vw);
}
to{
  transform: translateX(0vw);
}
`;
export const Background = styled(motion.div)`
${media.desktop}{
  display:none;
}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.black};
  z-index: 1;
`;
export const OverBackground = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  height: 100%;
  background: ${colors.orange};
  z-index: 2;
`;
export const ContainerModal = styled(motion.div)`
  position: fixed;
  background: ${colors.white};
  width: 90%;
  height: 100vh;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 3;
`;

export const CloseModalButton = styled(motion.button)`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const TitleModal = styled.h1`
  color: #662e9b;
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

export const SubtitleModal = styled.h2`
  color: #323941;
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ResetPassword = styled.a`
  color: #ff3b53;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FormModalSalon = styled.form`
  flex-wrap: wrap;
  flex-direction: row;
  width: auto;
  display: flex;
  padding: 5px 40px 25px 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LabelModal = styled.label`
  color: #323941;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  width: 250px;
  margin-bottom: 20px;
  margin-top: 8px;
  border: 1px solid #f0f0f0;
  font-size: 14px;

  &:focus {
    color: #ff3b53;
  }

  &::placeholder {
    color: #525151;
  }

  /* @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  } */
`;

export const FormTextArea = styled.textarea`
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  width: 250px;
  margin-bottom: 20px;
  margin-top: 8px;
  border: none;
  font-size: 14px;
  border: 1px solid #f0f0f0 !important;
  resize: none;

  &:focus {
    color: #ff3b53;
  }

  &::placeholder {
    color: #525151;
  }

  /* @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  } */
`;
