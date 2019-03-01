import React, { useState, useEffect } from 'react';

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
      <div className="stage__choice">
        <input
          type="radio"
          name="butter"
          id="butter1"
          className="stage__input"
          value={ true }
          onChange={ event => handleButter(event) }
        />
        <label className="stage__label" htmlFor="butter1">
					Yes, please
          {/* <img src={monster.images.thumb} alt={monster.name} /> */}
        </label>
      </div>
      <div className="stage__choice">
        <input
          type="radio"
          name="butter"
          id="butter2"
          className="stage__input"
          value={ false }
          onChange={ event => this.handleButter(event) }
        />
        <label className="stage__label" htmlFor="butter2">
					No, thank You
          {/* <img src={monster.images.thumb} alt={monster.name} /> */}
        </label>
      </div>
    </section>
  );
};

export default ButterStage;
