/* eslint-disable no-compare-neg-zero */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import useForm from '@useForm';
import LogoBlanco from '@images/LogoBlanco.svg';
import InputRange from '../../componentsFull/InputRange';
import { FormContainerCalculador, DivContainerLogoBlanco, DivContainerPrestamo, DivDescriptionCuota, PPrestamo, DivContainerCuotas, PCuota, DivCuota, DivContainerHeaderCuota, PDescuento } from './styledCalculadorCredito';

const CalculadorCredito = (props) => {
  const [formValues, handleInputChange, reset] = useForm({
    solicitudPrestamo: 500000,
    cantidad: 0,
  });
  const [inputNumberActive, setInputNumberActive] = useState(false);
  const [cuotasMensuales, setCuotasMensuales] = useState([]);
  const [descuento, setDescuento] = useState(0);
  const { credito } = props;
  const { minLimite, maxLimite } = credito;
  const { solicitudPrestamo, cantidad } = formValues;

  const format = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  const handleInputRangeChangeFather = (name, value) => {
    setInputNumberActive(false);
    const evento = {
      target: {
        name,
        value,
      },
    };
    handleInputChange(evento);
  };
  const handleInputActive = () => {
    setInputNumberActive(true);
  };
  const handleInputNumberLostFocus = () => {
    setInputNumberActive(false);
  };
  useEffect(() => {
    const tasa = 0.0266155;
    const Valor = solicitudPrestamo;
    const cuotas = [12, 24, 30];
    // cuotas = cuotas * -1;

    const cuotasPaso2 = cuotas.map((item) => {
      const cuota = item * -1;
      if (cuota === -0) {
        return 0;
      };
      return cuota;
    });
    const cuotaMensualesTotales = cuotasPaso2.map((item) => {
      let cuota = 0;
      const cuotas = item * -1;
      if (item !== 0) {
        const cuota1 = tasa * Valor;
        const cuota2 = 1 - Math.pow((1 + tasa), item);
        cuota = parseInt(cuota1 / cuota2);
      }
      const segu = ((Valor * 6 / 1000) / 12) * item * -1;
      const tram = Valor * 0.03;
      const desc = segu + tram + 15000;
      return {
        cuota,
        descuento: desc,
        cuotas,
      };
    });
    setCuotasMensuales(cuotaMensualesTotales);
    // setDescuento(desc);
  }, [solicitudPrestamo]);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`haz solicitado ${solicitudPrestamo} ya tomaremos tu datos personales`);
  };
  return (
    <FormContainerCalculador onSubmit={handleSubmit}>
      <div>
        <h2>
          Simulador de credito
        </h2>
        <div>
          <DivContainerPrestamo>
            <span>
              $
            </span>
            {inputNumberActive ?
              <input type='number' value={solicitudPrestamo} name='solicitudPrestamo' onFocus={handleInputChange} min={minLimite} max={maxLimite} onBlur={handleInputNumberLostFocus} onChange={handleInputChange} /> :
              <p onClick={handleInputActive}>{format(solicitudPrestamo)}</p>}
          </DivContainerPrestamo>
          <PPrestamo>
            Escribe tu solicitud de credito prestamo
          </PPrestamo>
        </div>
      </div>
      <label>
        <InputRange handleInputRangeChangeFather={handleInputRangeChangeFather} name='solicitudPrestamo' minLimite={minLimite} maxLimite={maxLimite} solicitudPrestamo={solicitudPrestamo} />
        Arrastra el punto
      </label>
      <DivContainerCuotas>
        {cuotasMensuales.length > 0 && cuotasMensuales.map((item) => (
          <DivCuota key={`cuotas${item.cuotas}`}>
            <DivContainerHeaderCuota>
              <span>
                $
              </span>
              <p>{format(item.cuota)}</p>
            </DivContainerHeaderCuota>
            <DivDescriptionCuota>
              <PCuota>
                {item.cuotas}
                {' '}
                Cuotas.
              </PCuota>
              <PDescuento>
                Descuentos
                {' '}
                {format(item.descuento)}
              </PDescuento>
            </DivDescriptionCuota>

          </DivCuota>
        ))}

      </DivContainerCuotas>
      <button type='submit'>
        Solicitar este credito
      </button>
      <DivContainerLogoBlanco>
        <img src={LogoBlanco} alt='alcaraván' />
      </DivContainerLogoBlanco>

    </FormContainerCalculador>
  );
};

export default CalculadorCredito;
