import React from 'react';
import ImgUsuario4 from '@images/usuarios/usuario4.jpg';
import { DivContainerCardHistorias, DivContainerWriting, DivDetailsHistoria, PNegrita } from './styledCardHistorias';

const CardHistorias = (props) => {
  const { historia } = props;
  const { image, title, fecha, municipio } = historia;
  return (
    <DivContainerCardHistorias>
      <img src={image} alt={title} />
      <DivContainerWriting>
        <DivDetailsHistoria>
          <PNegrita>
            {municipio}

          </PNegrita>
          <p>
            |
            {'  '}
            {fecha}
          </p>
        </DivDetailsHistoria>
        <h4>
          {title}
        </h4>
      </DivContainerWriting>
    </DivContainerCardHistorias>
  );
};

export default CardHistorias;
