import './App.css';
import circle from './circle.png'


function textoStatus(){
    return(
        <div className='flex-baseText'>
            <div>
                <img src={circle} className='circle'/>
            </div>
            <div>
                <h2>Status: Em andamento</h2>
            </div>
        </div>
    )
}

export default textoStatus;