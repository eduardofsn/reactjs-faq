import '../../App.css';
import map from '../../assets/map.png'


function Component(){
    return(
        <div className='item'>
            <img src={map} className='react-icon'/>
            <h3 className='item-title'>Localizar encomenda</h3>
        </div>
    )
}

export default Component;