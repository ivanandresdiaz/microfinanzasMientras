/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MdClose } from 'react-icons/md';
import NavbarMobile from '../../componentsFull/NavbarMobile';

import { Background, ContainerModal, OverBackground } from './styledModal';

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background
          animate={{
            x: 0,
            y: 0,
            scale: 1,
          }}
        >
          <OverBackground>
            <ContainerModal showModal={showModal}>
              <NavbarMobile setShowModal={setShowModal} />
            </ContainerModal>
          </OverBackground>
        </Background>
      ) : null}
    </>
  );
};
