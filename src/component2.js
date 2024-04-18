import './App.css';
import delivery from './deli.png'


function Component2(){
    return(
        <div className='item'>
            <img src={delivery} className='react-icon'/>
            <h3 className='item-title'>Destinário ausente</h3>
        </div>
    )
}

export default Component2;