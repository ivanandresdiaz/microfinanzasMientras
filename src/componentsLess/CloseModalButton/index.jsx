import React from 'react';
import './CloseModalButton.scss';

const CloseModalButton = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='close-button'>
          <div className='in'>
            <div className='close-button-block' />
            <div className='close-button-block' />
          </div>
          <div className='out'>
            <div className='close-button-block' />
            <div className='close-button-block' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseModalButton;
