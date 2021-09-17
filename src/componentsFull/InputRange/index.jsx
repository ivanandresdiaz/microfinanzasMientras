import React, { useRef, useState, useEffect } from 'react';
import './InputRange.scss';

const InputRange = (props) => {
  const { handleInputRangeChangeFather, solicitudPrestamo, name, minLimite, maxLimite } = props;

  const rangoDePrestamo = maxLimite - minLimite;
  const [rangePercent, setRangePercent] = useState(0);
  const h4 = useRef(null);
  const spanH4 = useRef(null);
  const inputRange = useRef(null);
  const handleInputRangeChange = (evento) => {
    const rangePercentage = inputRange.current.value ;
    setRangePercent(rangePercentage);
    const montoSolicitado = Math.round((rangoDePrestamo * (rangePercentage / 100)) + minLimite) ;
    // h4.current.innerHTML = '<span></span>';
    handleInputRangeChangeFather(evento.target.name, montoSolicitado);
  };
  useEffect(() => {
    if (solicitudPrestamo > 500000) {
      const porcentajeSolicitudPrestamo = Math.round(((solicitudPrestamo) * 100) / maxLimite);
      setRangePercent(porcentajeSolicitudPrestamo);
    } else {
      setRangePercent(0);
    }

  }, [solicitudPrestamo]);
  return (
    <div className='containerInputRange'>
      <input type='range' value={rangePercent} onChange={handleInputRangeChange} ref={inputRange} name={name} />
      {/* style=
      {{ filter: `hue-rotate(-${rangePercent}deg)` }} */}
      <div id='h4-container'>
        <div id='h4-subcontainer'>
          <h4 ref={h4} style={{ transform: 'translateX(-50%) ', left: `${rangePercent}%` }}>
            {/* scale(${1 + (rangePercent / 100)}) */}
            {/* filter: `hue-rotate(-${rangePercent}deg)`  */}
            {/* {minLimite} */}
            <span ref={spanH4} />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InputRange;
