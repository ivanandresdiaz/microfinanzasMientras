import React from 'react';
import imgStandart from '@images/sedes/arauquita.jpg';
import { DivContainerCardSedes, DivDescription } from './styledCardContactoSede';

const CardContactoSede = (props) => {
  const { sedeMunicipio } = props;
  const { sede, direccion, telefono, celular, image, horario } = sedeMunicipio;
  return (
    <DivContainerCardSedes>
      <img src={image} alt={sede} />
      <DivDescription>
        <h4>
          Sede
          {' '}
          {sede}
        </h4>
        <p>
          Dirección:
          {' '}
          {direccion}
        </p>
        <p>
          Teléfono:
          {telefono}
        </p>
        <p>
          Horario:
          {horario}

        </p>
        <p>
          Celular:
          {' '}
          {celular}
        </p>
      </DivDescription>
    </DivContainerCardSedes>
  );
};

export default CardContactoSede;
