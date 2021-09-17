/* eslint-disable import/no-unresolved */
import React from 'react';
import NavBar from '@componentsFull/NavBar';

import { RiWhatsappFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';

import Hero from '../../componentsLess/Hero';
import PorqueAlcaravan from '../../componentsLess/PorqueAlcaravan';
import PreguntasFrecuentes from '../../componentsLess/PreguntasFrecuentes';
import SimuladorCreditos from '../../componentsLess/SimuladorCreditos';
import Footer from '../../componentsLess/Footer';
import Carousel from '../../componentsLess/Carousel';
import { DivContainerHero, DivLogoWhatsapp } from './styledHome';
import HistoriasExito from '../../componentsLess/HistoriasExito';
import Testimonios from '../../componentsLess/Testimonios';
import Aliados from '../../componentsLess/Aliados';
import Contactanos from '../../componentsLess/Contactanos';

const Home = (props) => {
  const { showModal, setShowModal } = props;
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <NavBar setShowModal={setShowModal} />
      <DivContainerHero>
        <Carousel />
        <Hero />
      </DivContainerHero>
      <PorqueAlcaravan />

      <SimuladorCreditos />

      <HistoriasExito />
      <Testimonios />
      <Aliados />
      <Contactanos />
      <Footer />
      <DivLogoWhatsapp>
        {/* <DivCloseWhatsap>
          <p>
            X
          </p>
        </DivCloseWhatsap> */}
        <a href='https://wa.link/7c5b5c' target='_blank' rel='noreferrer'>
          <IoLogoWhatsapp size='6rem' color='#297263' />
        </a>

      </DivLogoWhatsapp>
    </div>
  );
};

export default Home;
