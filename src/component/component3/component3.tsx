import React from 'react';
import '../../App.css';
import trolley from '../../assets/trolley.png'


function Component3(){
    return(
        <div className='item'>
            <img src={trolley} className='react-icon'/>
            <h3 className='item-title'>Danos à encomenda</h3>
        </div>
    )
}

export default Component3;