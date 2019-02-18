import React, { useState, useEffect } from 'react';

const BreadStage = ({ currentStage, setBread }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);

    if (currentStage === 1) {
      setTimeout(() => {
        setVisible(true);
      }, 50);
    }
  }, []);

  useEffect(() => {
    if (props.currentStage === 1) {
      setTimeout(() => {
        setVisible(true);
      }, 50);
    } else {
      setVisible(false);
    }
  }, [props]);

  const handleBread = event => {
    setBread(event.target.value);
  };

  return (
    <section className={ visible ? 'stage' : 'stage stage--hidden' }>
      <div className="stage__choice">
        <input
          type="radio"
          name="bread"
          id="bread1"
          className="stage__input"
          value="bread1"
          onChange={ event => handleBread(event) }
        />
        <label className="stage__label" htmlFor="bread1">
          BREAD 1
          {/* <img src={monster.images.thumb} alt={monster.name} /> */}
        </label>
      </div>
      <div className="stage__choice">
        <input
          type="radio"
          name="bread"
          id="bread2"
          className="stage__input"
          value="bread2"
          onChange={ event => handleBread(event) }
        />
        <label className="stage__label" htmlFor="bread2">
          BREAD 2
          {/* <img src={monster.images.thumb} alt={monster.name} /> */}
        </label>
      </div>
    </section>
  );
};

export default BreadStage;
