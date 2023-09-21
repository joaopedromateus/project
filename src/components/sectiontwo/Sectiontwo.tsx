import React from 'react';

import iconJustice from '../../images/iconjustice.png';
import iconInfraestrutura from '../../images/iconinfraestrutura.png';
import iconProcessos from '../../images/iconprocessos.png';

function Sectiontwo() {
  const cards = [
    {
      title: 'Justiça',
      text: 'Tecnologia impulsionando a eficiência judicial.',
      imageSrc: iconJustice, 
    },
    {
      title: 'Infraestrutura e Obras',
      text: 'Mais eficiência para a gestão da infraestrutura de transportes e obras públicas',
      imageSrc: iconInfraestrutura, 
    },
    {
      title: 'Processos Digitais e Administrativos',
      text: 'Agilidade e assertividade garantida pela Transformação Digital',
      imageSrc: iconProcessos, 
    },
  ];

  return (
    <section id="section-two" className="flex items-center justify-center w-full h-screen bg-black">
      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </section>
  );
}

function Card({ card }) {
  const cardStyle = {
    transform: 'scale(1)',
    transition: 'transform 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className={`flex flex-col items-center justify-center w-auto gap-2 p-4 text-center duration-300 bg-purple-600 border-2 rounded-lg shadow-lg hover:delay-100 hover:bg-bgCard border-slate-800 bg-opacity-5 bg-blur-sm backdrop-filter backdrop-blur-sm ${isHovered ? 'hover:scale-105' : ''}`} 
         style={isHovered ? cardHoverStyle : cardStyle}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <img src={card.imageSrc} className="image-transition" alt={`Card Image ${card.title}`} />
      <h3 className={`text-xl font-semibold text-indigo-700  `}>{card.title}</h3>
      <p className={`text-sm font-normal ${isHovered ? 'text-indigo-700' : 'text-white'}`}>{card.text}</p>
    </div>
  );
}

export default Sectiontwo;
