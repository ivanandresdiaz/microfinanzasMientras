/* eslint-disable react/no-array-index-key */
import React from 'react';
import CardContactoSede from '../CardContactoSede';
import { DivContainerContactanos, DivContainerCardsContactanos, DivHeaderContactanos } from './styledContactanos';

const Contactanos = () => {
  const sedes = [
    {
      sede: 'Arauca',
      direccion: 'Carrera 20 #21-56 Centro',
      telefono: '(607)885 1733',
      celular: '314-267 1870',
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2Farauca.jpg?alt=media&token=949534c5-1e8e-4c21-964d-81e5866a5c1b',
      horario: 'Lunes-Viernes 7 AM -12 M 2PM-6PM',
    },
    {
      sede: 'Tame',
      direccion: 'Cra 16 N°14-98 centro',
      telefono: '(7) 8883174',
      celular: 0,
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2Ftame.jpg?alt=media&token=169b676d-0caf-43f9-afee-88840f15d190',
      horario: 'Lunes-Viernes 7 AM -12 M 2PM-6PM',
    },
    {
      sede: 'Saravena',
      direccion: 'Cra 14 con calle 28 esquina',
      telefono: '(7) 8891286',
      celular: 0,
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2FsedeSaravenajpg.jpg?alt=media&token=c1fc800a-68d9-471b-8d98-9dcb58923142',
      horario: 'Lunes-Viernes 7 AM -12 M 2PM-6PM',
    },
    {
      sede: 'Fortul',
      direccion: 'Calle 7 N°20-46 centro',
      telefono: '314-266 8072   ',
      celular: '314-266 8072',
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2FsedeSaravenajpg.jpg?alt=media&token=c1fc800a-68d9-471b-8d98-9dcb58923142',
      horario: 'Lunes-Viernes 7 AM -12 M 2PM-6PM',
    },
    {
      sede: 'Arauquita',
      direccion: 'Calle 5 N°2-18 B/San Martín',
      telefono: '(7) 8836200',
      celular: '(7) 8836200',
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2Farauquita.jpg?alt=media&token=427453c8-3892-49f3-81ec-86161cda00f5',
      horario: 'Lunes-Viernes 7 AM -12 M 2PM-6PM',
    },
    {
      sede: 'Arauquita',
      direccion: '(Al lado de electromuebles)',
      telefono: '314-267 0614',
      celular: '314-267 0614',
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2FpuertoJordan.jpg?alt=media&token=dc37dbd1-775b-4648-b472-ab4ab316eee9',
      horario: 'Lunes-Viernes 7 AM -12 M 2PM-6PM',
    },
  ];
  return (
    <DivContainerContactanos>
      <DivHeaderContactanos>
        <h3>
          Contáctenos
        </h3>
        <p>
          correo: microcreditos@alcaravan.org.co
        </p>
      </DivHeaderContactanos>
      <DivContainerCardsContactanos>
        {sedes.map((item, index) => (
          <CardContactoSede key={`${item.sede}${index}`} sedeMunicipio={item} />
        ))}

      </DivContainerCardsContactanos>
    </DivContainerContactanos>
  );
};

export default Contactanos;
