/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import usuario2 from '@images/usuarios/usuario4.jpg';
import usuario1 from '@images/usuarios/usuario2.jpg';
import usuario3 from '@images/usuarios/usuario3.jpg';
import LogoBlanco from '@images/LogoBlanco.svg';
import { colors } from '@colors';
import { AiFillHeart } from 'react-icons/ai';
import './Carousel.scss';

const Carousel = () => {
  const [selectorClass, setSelectorClass] = useState('');
  const handleToggle = () => {
    if (setSelectorClass === 'blue') {
      setSelectorClass('');
    } else {
      setSelectorClass('blue');
    }

  };

  return (
    <section className='containerHero'>
      <div className={`carouselHero ${selectorClass}`}>
        <div className='container'>
          <input type='radio' name='slider' id='item-1' defaultChecked={true} onChange={handleToggle} />
          <input type='radio' name='slider' id='item-2' defaultChecked={false} onChange={handleToggle} />
          <input type='radio' name='slider' id='item-3' defaultChecked={false} onChange={handleToggle} />
          <div className='cards'>
            <label className='card' htmlFor='item-1' id='song-1'>
              <img src={usuario1} alt='song' />
            </label>
            <label className='card' htmlFor='item-2' id='song-2'>
              <img src={usuario2} alt='song' />
            </label>
            <label className='card' htmlFor='item-3' id='song-3'>
              <img src={usuario3} alt='song' />
            </label>
          </div>
          <div className='player'>
            <div className='upper-part'>
              <div className='info-area' id='test'>
                <label className='song-info' id='song-info-1'>
                  <div className='title'>
                    Fabian Jaimes
                    {' '}
                    <span>
                      Fortul-Arauca
                    </span>
                  </div>
                  <div className='sub-line'>
                    <div className='subtitle'>“La fundacion alcaraván me dio ese impulso que me hacia falta para mejorar mi empresa”</div>
                    <span>
                      #SoyAlcaravan
                      <AiFillHeart color={colors.orange} size='2rem' />
                    </span>
                  </div>
                </label>
                <label className='song-info' id='song-info-1'>
                  <div className='title'>
                    Julian Castro
                    {' '}
                    <span>
                      Arauca-Arauca
                    </span>
                  </div>
                  <div className='sub-line'>
                    <div className='subtitle'>
                      “muy buena experiencia trabajar con el Alcaraván. Manejan excelentes tasas”
                    </div>
                    <span>
                      #SoyAlcaravan
                      <AiFillHeart color={colors.orange} size='2rem' />
                    </span>
                  </div>
                </label>
                <label className='song-info' id='song-info-1'>
                  <div className='title'>
                    Fabian Jaimes
                    {' '}
                    <span>
                      Fortul-Arauca
                    </span>
                  </div>
                  <div className='sub-line'>
                    <div className='subtitle'>“Yo estoy muy contento con el Alcaraván. Excelente servicio.”</div>
                    <span>
                      #SoyAlcaravan
                      <AiFillHeart color={colors.orange} size='2rem' />
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Background'>
        <h1>
          Microfinanzas El Alcaraván
        </h1>
        <div>
          <img src={LogoBlanco} alt='alcaraván' />
        </div>
      </div>
    </section>

  );
};

export default Carousel;
