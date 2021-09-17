/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useContext } from 'react';
import { MdReorder } from 'react-icons/md';
import { ButtonDownLoadCurriculum, NavHamburgerContainer, H1White, IconHamburgerContainer, DivModalLogo, DivModalLayoutNav, AItemNav } from './styledNavbarHamburguesa';
import ThemeContext from '../context/ThemeContext';
import Modal from '../containers/Modal';
import CloseModal from './CloseModal';

const NavHamburgesa = () => {
  const { toogleModal, showModal } = useContext(ThemeContext);
  const handleModal = () => {
    toogleModal(showModal);
  };
  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 90;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);
  const normal = () => (
    <>
      <NavHamburgerContainer>
        <MdReorder onClick={handleModal} color='#FF8906' size='40px' />
        <H1White>Andres Diaz</H1White>
        <ButtonDownLoadCurriculum>
          Curriculum
        </ButtonDownLoadCurriculum>
      </NavHamburgerContainer>
      <Modal isOpen={showModal}>
        <DivModalLayoutNav>
          <DivModalLogo>
            <div onClick={handleModal}>
              <CloseModal />
            </div>
            <H1White>Andres Diaz</H1White>
          </DivModalLogo>
          <AItemNav href='#'>Hola</AItemNav>
          <AItemNav href='#'> Proyectos </AItemNav>
          <AItemNav href='#'> Testimonios</AItemNav>
          <AItemNav href='#'>Contacto</AItemNav>
        </DivModalLayoutNav>
      </Modal>
    </>

  );
  const fixed = () => (
    <>
      <IconHamburgerContainer>
        <MdReorder onClick={handleModal} color='#FF8906' size='40px' />
      </IconHamburgerContainer>
      <Modal isOpen={showModal}>
        <DivModalLayoutNav>
          <DivModalLogo>
            <div onClick={handleModal}>
              <CloseModal />
            </div>
            <H1White>Andres Diaz</H1White>
          </DivModalLogo>
          <AItemNav href='#'>Hola</AItemNav>
          <AItemNav href='#'> Proyectos </AItemNav>
          <AItemNav href='#'> Testimonios</AItemNav>
          <AItemNav href='#'>Contacto</AItemNav>
        </DivModalLayoutNav>
      </Modal>
    </>
  );
  return (
    <>
      {normal()}
      {showFixed && fixed()}
    </>
  );
};

export default NavHamburgesa;
