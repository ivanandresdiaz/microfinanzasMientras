/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Logo from '@images/logo.jsx';
import CloseModalButton from '../../componentsLess/CloseModalButton';
import { DivContainerNavbarMobile, DivContainerHeaderNavbarMobile } from './styledNavbarMobile';

const NavbarMobile = ({ setShowModal }) => {
  return (
    <DivContainerNavbarMobile>
      <DivContainerHeaderNavbarMobile>
        <Logo />
        <div onClick={() => setShowModal((prev) => !prev)}>
          <CloseModalButton />
        </div>
      </DivContainerHeaderNavbarMobile>
      <ul>
        <li>
          Iniciar sesion
        </li>
        <li>
          Nosotros
        </li>
        <li>
          Solicita tu credito
        </li>
        <li>
          Contactanos
        </li>
      </ul>
    </DivContainerNavbarMobile>
  );
};

export default NavbarMobile;
