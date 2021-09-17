import React from 'react';
import CardHistorias from '../CardHistorias';
import { DivContainerHistoriasExito, DivContainerCards, DivHeaderHistoriasExito } from './styledHistoriasExito';

const HistoriasExito = () => {
  const historiasExito = [
    {
      municipio: 'Tame',
      fecha: '03 Febrero 2021',
      title: 'La Primavera: de tienda a gran supermercado.',
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2Fusuario4.jpg?alt=media&token=d431a522-bd42-46e8-8ac1-57d8473300da',
    },
    {
      municipio: 'Fortul',
      fecha: '03 Marzo 2021',
      title: 'Modatex: exportando sueños.',
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2Fusuario6.jpg?alt=media&token=04108155-7c1b-4ab0-a294-503c187536c2',
    },
    {
      municipio: 'Arauquita',
      fecha: '03 Febrero 2021',
      title: 'Daza Cacao: Chocolate para el Mundo.',
      image: 'https://firebasestorage.googleapis.com/v0/b/geekplatformdev.appspot.com/o/fundacion%2Fchocolate.jpg.png?alt=media&token=533aeb1b-28f4-41ae-bc9f-db6d922b414a',
    },
  ];
  return (
    <DivContainerHistoriasExito>
      <DivHeaderHistoriasExito>
        <h3>
          Historias de Éxito
        </h3>
        <p>Conozca las historias de microempresarios que son un ejemplo para los emprendedores.</p>
      </DivHeaderHistoriasExito>
      <DivContainerCards>
        {historiasExito.map((item) => (
          <CardHistorias key={item.title} historia={item} />
        ))}

      </DivContainerCards>
    </DivContainerHistoriasExito>
  );
};

export default HistoriasExito;
