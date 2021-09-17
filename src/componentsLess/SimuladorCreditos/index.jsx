import React, { useState, useEffect } from 'react';
import useForm from '@useForm';
import usuario4 from '@images/usuarios/usuario4.jpg';
import Separador1 from '@images/Simulador/Separador1.svg';
import Separador2 from '@images/Simulador/Separador2.svg';
import { DivContainerSimuladorCreditos, DivSeparador1, DivCreditosPopulares, HighestContainerSimuladorCreditos } from './styledSimuladorCredito';
import CalculadorCredito from '../CalculadorCredito';

const dataCreditos = [
  {
    name: 'credito1',
    cuotas: [12, 24, 36],
    tasa: 2.8,
    minLimite: 500000,
    maxLimite: 25000000,
  },
];

const SimuladorCreditos = () => {
  const [focus, setFocus] = useState('credito1');
  const [selectedCredit, setSelectedCredit] = useState(dataCreditos[0]);
  const handleFocusCredito = (number) => {
    setSelectedCredit(dataCreditos[number]);
  };
  const [formValues, handleInputChange, reset] = useForm({
    cantidad: 0,
  });
  const { cantidad } = formValues;
  return (
    <HighestContainerSimuladorCreditos>
      <div>
        <img src={Separador1} alt='Separador1' />
      </div>
      <DivContainerSimuladorCreditos>
        <DivCreditosPopulares>
          <img src={usuario4} alt='Fortalezca su negocio' />
          <h3>Reactive su economía, fortaleciendo su negocio.</h3>
          <div>
            <p>
              Compra de inventarios.
            </p>
            <p>
              Compra de equipos y maquinaria.
            </p>
            <p>
              Remodelación o ampliación de su negocio.
            </p>
          </div>
        </DivCreditosPopulares>
        <CalculadorCredito credito={selectedCredit} />
      </DivContainerSimuladorCreditos>
      <img src={Separador2} alt='Separador1' />
    </HighestContainerSimuladorCreditos>

  );
};

export default SimuladorCreditos;

