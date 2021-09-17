import React from 'react';
import Row from './Row';
import { DivContainerPreguntasFrecuentes, DivContainerRows } from './styledPreguntasFrecuentes';

const PreguntasFrecuentes = () => {
  return (
    <DivContainerPreguntasFrecuentes>
      <h3>
        Preguntas Frecuentes
      </h3>
      <DivContainerRows>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </DivContainerRows>
    </DivContainerPreguntasFrecuentes>
  );
};

export default PreguntasFrecuentes;
