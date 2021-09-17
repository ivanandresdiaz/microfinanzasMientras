/* eslint-disable import/no-unresolved */
import React from 'react';
import { AiOutlineDollarCircle, AiFillHeart } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import { VscSmiley } from 'react-icons/vsc';
// import { colors } from '@colors';
// import ImgEconomico from '@images/porqueAlcaravan/competitivo.jpg';
// import ImgServicio from '@images/porqueAlcaravan/facil.jpg';
// import ImgFacil2 from '@images/porqueAlcaravan/facil2.jpg';
// import ImgRapido from '@images/porqueAlcaravan/rapido.jpg';
import Separador1 from '@images/Simulador/Separador1.svg';
import { DivLogito, DivItemReason, DivWhyHeader, DivContainerReasonsWhy, DivContainerWhy } from './styledPorqueAlcaravan';
import LogoPajaro from '../LogoPajaro';

const PorqueAlcaravan = () => {
  return (
    <DivContainerWhy>
      <DivWhyHeader>
        <h2>¿Porqué solicitar un crédito con Microfinanzas El Alcaraván?</h2>
        <LogoPajaro />
      </DivWhyHeader>
      <DivContainerReasonsWhy>
        <DivItemReason>
          <div>
            <DivLogito>
              <AiOutlineDollarCircle size='2rem' color='white' />
            </DivLogito>
            <h3>
              Económico
            </h3>
            <p>
              Tenemos unas tasas competitivas del mercado.
            </p>
          </div>
        </DivItemReason>
        <DivItemReason>
          <div>
            <DivLogito>
              <AiFillHeart size='2rem' color='white' />
            </DivLogito>

            <h3>
              Excelente Servicio
            </h3>
            <p>
              Nos apasiona el progreso de Arauca; por eso, somos felices de dar excelente servicio y atencion.
            </p>
          </div>
        </DivItemReason>
        <DivItemReason>
          <div>
            <DivLogito>
              <VscSmiley size='2rem' color='white' />
            </DivLogito>

            <h3>
              Fácil
            </h3>
            <p>
              hacemos nuestros procesos faciles y de poco tramite para nuestros usuarios.
            </p>
          </div>
        </DivItemReason>
        <DivItemReason>
          <div>
            <DivLogito>
              <MdDone size='2rem' color='white' />
            </DivLogito>

            <h3>
              Rápido
            </h3>
            <p>
              por casualidad hay algun promedio de dias que toma sacar un credito con ustedes
            </p>
          </div>
        </DivItemReason>
      </DivContainerReasonsWhy>

    </DivContainerWhy>
  );
};

export default PorqueAlcaravan;
