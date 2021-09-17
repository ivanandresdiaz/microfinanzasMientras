import React, { useRef } from 'react';
import ImgFundacion from '@images/aliados/alcaravan.svg';
import ImgSierraCol from '@images/aliados/SierraCol.svg';
import ImgEcopetrol from '@images/aliados/ecopetrol.png';
import ImgAsomicrofinanzas from '@images/aliados/asomicrofinanzas.jpg';
import './aliados.scss';

const Aliados = () => {
  return (
    <div className='containerAliados'>
      <div className='scroll-wrapper'>
        <div className='orb'>
          <a href='https://www.sierracolenergy.com/' target='_blank' rel='noreferrer'>
            <img src={ImgSierraCol} alt='SierraCol' />
          </a>
        </div>
        <div className='orb'>
          {/* <a href='https://www.sierracolenergy.com/' target='_blank' rel='noreferrer'> */}
          <img src={ImgFundacion} alt='SierraCol' />
          {/* </a> */}
        </div>
        <div className='orb'>
          <img src={ImgEcopetrol} alt='Fundacion Alcarán' />
        </div>
        <div className='orb'>
          <img src={ImgAsomicrofinanzas} alt='Asomicrofinanzas' />
        </div>
        <div className='orb'>
          <img src={ImgSierraCol} alt='SierraCol' />
        </div>
        <div className='orb'>
          <img src={ImgEcopetrol} alt='Fundacion Alcarán' />
        </div>
        <div className='orb'>
          <img src={ImgAsomicrofinanzas} alt='Asomicrofinanzas' />
        </div>
      </div>
      <div className='scroll-wrapper'>
        <div className='orb'>
          <a href='https://www.sierracolenergy.com/' target='_blank' rel='noreferrer'>
            <img src={ImgSierraCol} alt='SierraCol' />
          </a>
        </div>
        <div className='orb'>
          {/* <a href='https://www.sierracolenergy.com/' target='_blank' rel='noreferrer'> */}
          <img src={ImgEcopetrol} alt='Fundacion Alcarán' />
          {/* </a> */}
        </div>
        <div className='orb'>
          <img src={ImgFundacion} alt='Fundacion Alcaraván' />
        </div>
        <div className='orb'>
          <img src={ImgAsomicrofinanzas} alt='Asomicrofinanzas' />
        </div>
        <div className='orb '>
          <img src={ImgSierraCol} alt='SierraCol' />
        </div>
        <div className='orb'>
          <img src={ImgEcopetrol} alt='Fundacion Alcarán' />
        </div>
        <div className='orb'>
          <img src={ImgAsomicrofinanzas} alt='Asomicrofinanzas' />
        </div>
      </div>
    </div>
  );
};

export default Aliados;
