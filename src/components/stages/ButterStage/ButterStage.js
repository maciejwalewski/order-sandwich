import React, { useState, useEffect } from 'react';
import { butterFields } from '@/constants/fields';

const ButterStage = ({ currentStage, setButter }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentStage === 2) {
      setTimeout(() => {
        setVisible(true);
      }, 50);
    } else {
      setVisible(false);
    }
  }, [currentStage]);

  const handleButter = event => {
    const { value } = event.target;
    setButter(value === 'true' ? true : false);
  };

  return (
    <section className={ visible ? 'stage' : 'stage stage--hidden' }>
      <span className="indie">Would You like some butter?</span>
      {butterFields.map(butter => (
        <div className="stage__choice">
          <input
            type={ butter.type }
            id={ butter.id }
            name="butter"
            className="stage__input"
            value={ butter.value }
            onChange={ event => handleButter(event) }
          />
          <label className="stage__label" htmlFor={ butter.id }>
            {butter.label}
            {/* <img src={monster.images.thumb} alt={monster.name} /> */}
          </label>
        </div>
      ))}
    </section>
  );
};

export default ButterStage;
