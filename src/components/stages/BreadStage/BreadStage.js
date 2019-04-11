import React, { useState, useEffect } from 'react';
import { breadFields } from '@/constants/fields';
import bread_choice from '@/assets/bread_choice.png';
import { StageButtons } from '@/components/stages';
import PropTypes from 'prop-types';

const BreadStage = ({ 
  currentStage,
  setBread
}) => {
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
      <div className="stage__part">
        <img src={ bread_choice } className="stage__image" />
        <span className="stage__question indie">Please choose your bread type:</span>
      </div>
      <div className="stage__part">
        {breadFields.map(bread => (
          <div key={ bread.id } className="stage__choice">
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
            </label>
          </div>
        ))}
      </div>
      <div className="stage__part">
        <StageButtons />
      </div>
    </section>
  );
};

BreadStage.propTypes = {
  currentStage: PropTypes.number.isRequired,
  setBread: PropTypes.func.isRequired
}

export default BreadStage;
