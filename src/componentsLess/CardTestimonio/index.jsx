/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { DivContainerCardTestimonio, DivUsuario, PTestimonio, PNombre } from './styledCardTestimonios';

const CardTestimonios = (props) => {
  const { info } = props;
  const { testimonio, nombre, municipio, profesion, photoURL } = info;
  return (
    <DivContainerCardTestimonio>
      <PTestimonio>
        {testimonio}
      </PTestimonio>
      <DivUsuario>
        <img src={photoURL} alt={nombre} />
        <div>
          <PNombre>
            {nombre}
          </PNombre>
          <p>
            {municipio}
            {' '}
            -
            {' '}
            {profesion}
          </p>
        </div>

      </DivUsuario>

    </DivContainerCardTestimonio>
  );
};

export default CardTestimonios;
