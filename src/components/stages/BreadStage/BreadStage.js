import React, { useState, useEffect } from 'react';

import { breadFields } from '@/constants/fields';

const BreadStage = ({ currentStage, setBread }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentStage === 1) {
      setTimeout(() => {
        setVisible(true);
      }, 50);
    } else {
      setVisible(false);
    }
  }, [currentStage]);

  const handleBread = event => {
    setBread(event.target.value);
  };

  return (
    <section className={ visible ? 'stage' : 'stage stage--hidden' }>
      <span className="indie">Please choose your bread type:</span>
      {breadFields.map(bread => (
        <div className="stage__choice">
          <input
            name="bread"
            className="stage__input"
            type={ bread.type }
            id={ bread.id }
            value={ bread.id }
            onChange={ event => handleBread(event) }
          />
          <label className="stage__label" htmlFor={ bread.id }>
            {bread.label}
            {/* <img src={monster.images.thumb} alt={monster.name} /> */}
          </label>
        </div>
      ))}
    </section>
  );
};

export default BreadStage;
