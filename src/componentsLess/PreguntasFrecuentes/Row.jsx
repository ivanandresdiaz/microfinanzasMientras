import React, { useState } from 'react';
import { colors } from '@colors';
import './Row.scss';
import { AiFillInfoCircle } from 'react-icons/ai';
import { DetailsRow, DivIconInfo } from './styledRow';

const Row = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <DetailsRow active={active}>
        <summary onClick={handleActive}>
          <DivIconInfo>
            <AiFillInfoCircle size='2rem' color={`${colors.black}`} />
          </DivIconInfo>
          ¿ esta es la primera pregunta frecuente lorem ipsum dolor  ?
        </summary>
        <div className='content'>
          <p>
            Contenido
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor ipsa laborum sit sed eius optio laudantium temporibus doloribus odit error dolorum impedit corrupti odio quos officiis, dolores commodi vitae.
          </p>
        </div>
      </DetailsRow>
    </>
  );
};

export default Row;
