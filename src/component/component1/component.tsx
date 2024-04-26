import React from 'react';
import '../../App.css';
import map from '../../assets/map.png';

function Component() {
    return (
        <div className='item'>
            <img src={map} className='react-icon' alt='Map Icon' />
            <h3 className='item-title'>Localizar encomenda</h3>
        </div>
    );
}

export default Component;
