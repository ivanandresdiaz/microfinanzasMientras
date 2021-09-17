/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@images/logoPajaro1.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { colors } from '@colors';
import { VscAccount } from 'react-icons/vsc';
import { DivContainerNav, DivLinea, LiCreditos, DivContainerHamburguer, DivItemsNav, DivImg, SpanSolicitarCredito, SpanIniciarSesion } from './styledNavbar';

const NavBar = ({ setShowModal }) => {
  const [hover, setHover] = useState(colors.orange);
  const handleModal = () => {
    setShowModal(true);
  };
  const handleMouseEnter = () => {
    setHover('white');
  };
  const handleMouseLeave = () => {
    setHover(colors.orange);
  };
  return (
    <div>
      <DivContainerNav>
        <DivImg>
          <Link to='/'>
            <img src={logo} alt='Microfinanzas logo' />
          </Link>
          <h2>Microfinanzas Alcaraván</h2>
        </DivImg>
        <DivItemsNav>
          <ul>
            <Link to='/'>
              <LiCreditos>
                Créditos
              </LiCreditos>
            </Link>
            <Link to='/nosotros'>
              <li>
                Nosotros
              </li>
            </Link>

            <Link to='/'>
              <li>Educación Financiera</li>
            </Link>
            <Link to='/'>
              <li>Plaza Digital</li>
            </Link>
            <Link to='/'>
              <li>Contacto</li>
            </Link>
            <Link to='/' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <SpanIniciarSesion>
                <VscAccount color={hover} size='1.8rem' />
                <p>
                  Soy Alcaravan
                </p>

              </SpanIniciarSesion>
            </Link>
            <Link to='/'>
              <SpanSolicitarCredito>
                Solicitar mi crédito
              </SpanSolicitarCredito>
            </Link>
          </ul>
        </DivItemsNav>
        <DivContainerHamburguer>
          <div onClick={handleModal}>
            <GiHamburgerMenu size='28px' color={colors.black} />
          </div>
        </DivContainerHamburguer>

      </DivContainerNav>
    </div>

  );
};

export default NavBar;
