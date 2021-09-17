import React from 'react';
import CardTestimonios from '../CardTestimonio/index';
import { DivContainerCardsTestimonios, DivHeaderTestimonio, DivContainerTestimonio } from './styledTestimonios';

const Testimonios = () => {

  const testimonios = [
    {
      nombre: 'Libardo Rojas',
      testimonio: '"Excelente experiencia, me senti bien asesorado, Ahora mi negocio es un exito".',
      municipio: 'Fortul',
      profesion: 'Tendero',
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/socialGeek%2F1516939414811.jpg?alt=media&token=09855bfd-3164-495d-be49-59310d21d064',
    },
    {
      nombre: 'Sandra Mendoza',
      testimonio: 'Ahora yo mismo produzco mi propio chocolate y genero empleo a mi comunidad. Excelente',
      municipio: 'Arauquita',
      profesion: 'Empresaria',
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/socialGeek%2F30633488.jpg?alt=media&token=6cba4e69-9ba6-42e2-a990-7c14f5c2f6ee',
    },
    {
      nombre: 'Jorge Quinteo',
      testimonio: 'Las buenas ideas necesitan un empujon y salio muy bien',
      municipio: 'Puerto Jordan',
      profesion: 'Lechero',
      photoURL: 'https://firebasestorage.googleapis.com/v0/b/geekplatform-dc705.appspot.com/o/socialGeek%2F1579203104807.jpg?alt=media&token=b5162975-7dd7-408a-908f-44e44fa89c0a',
    },
  ];
  return (
    <DivContainerTestimonio>
      <DivHeaderTestimonio>
        <h3>
          Nuestros microempresarios nos recomiendan
        </h3>
        <p>
          Mas de 3.500 microempresarios  han impulsado sus negocios con nuestros servicios.
        </p>
      </DivHeaderTestimonio>

      <DivContainerCardsTestimonios>
        {
          testimonios.map((item) => (
            <CardTestimonios key={item.nombre} info={item} />
          ))
        }
      </DivContainerCardsTestimonios>

    </DivContainerTestimonio>
  );
};

export default Testimonios;
