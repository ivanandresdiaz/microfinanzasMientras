/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import usuario from '@images/usuarios/usuario222.png';
import usuarioMobile from '@images/usuarios/usuario22.jpg';
import { MdSettingsCell } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { DivContainerHero, DivCarousel, DivGradient, DivContainerImg, DivWriting, SpanSolicitarCredito, DivImgUsuarioMobile, DivLlamanos } from './styledHero';
import Carousel from '../Carousel';

const Hero = () => {
  return (
    <DivContainerHero>

      <DivWriting>
        <h1>
          ¿Necesita dinero para su negocio?
        </h1>
        <h2>
          ¡Nosotros le prestamos!
        </h2>

        <p>
          Ágil, fácil y a su medida.
        </p>

        <Link to='/'>
          <SpanSolicitarCredito>
            Solicitar mi credito
          </SpanSolicitarCredito>
        </Link>
        <DivLlamanos>
          <p>
            Llamanos
          </p>
          <p>
            <MdSettingsCell size='2rem' />
            {' '}
            Celular: 314 267 1870
          </p>
          <p>
            <BiPhoneCall />
            {' '}
            Teléfono:
            {' '}
            (607) 885 1733
          </p>
        </DivLlamanos>
      </DivWriting>
      {/* <DivContainerImg>
        <img src={usuario} alt='Usuario' />
      </DivContainerImg> */}
    </DivContainerHero>
  );
};

export default Hero;

