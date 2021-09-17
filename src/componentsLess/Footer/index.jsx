import React from 'react';
import sierraColyEcopetrol from '@images/aliados/sierraColyEcopetrol.png';
import { DivContainerImgSierraColEcopetrol, DivContainerFooter } from './styledFooter';

const Footer = () => {
  return (
    <DivContainerFooter>
      <DivContainerImgSierraColEcopetrol>
        <div>
          <img src={sierraColyEcopetrol} alt='SierraCol y Ecopetrol' />
        </div>

      </DivContainerImgSierraColEcopetrol>
      <ul>
        <li>Créditos</li>
        <li>
          Educación financiera
        </li>
        <li>
          Puntos de atención
        </li>
        <li>
          Canales de Pago
        </li>
        <li>
          Preguntas frecuentes
        </li>
      </ul>
      <ul>
        <li>
          Trabaja con Nosotros
        </li>
        <li>
          PQR
        </li>
        <li>
          Proteccion al Consumidor Financiero
        </li>
        <li>
          Politica de privacidad y proteccion de datos
        </li>
      </ul>
    </DivContainerFooter>
  );
};

export default Footer;
