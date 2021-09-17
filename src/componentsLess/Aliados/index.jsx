import React from 'react';
import CarouselAliados from './CarouselAliados';
import { DivContainerAliados, DivHeaderAliados } from './styledAliados';

const Aliados = () => {
  return (
    <DivContainerAliados>
      <DivHeaderAliados>
        <h3>Empresas Aliadas</h3>
        {/* <p>estas son nuestras empresas aliadas</p> */}
      </DivHeaderAliados>
      <CarouselAliados />
    </DivContainerAliados>
  );
};

export default Aliados;
