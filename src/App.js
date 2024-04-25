import './App.css';
import Component from './component';
import Component2 from './component2';
import Component3 from './component3';
import Status from './status';
import Textostatus from './textostatus';
import Ellipse from './ellipse';
import Support from './suportbutton';

function App() {
  return (
  <div className="App">
    <div className="status">
        <Textostatus/>
        <Status/>
    </div>
    <div>
      <p className='blueText'>Ver todos os meus tickets abertos -></p>
    </div>
    <br/>
        <h1 className='title'>Perguntas Frequentes</h1>
        <div className='carrousel'>
            <Component/>
            <Component2/>
            <Component3/>
        </div>
        <br/>
      <div className='carrousel-control'>
        <Ellipse/>
        <Ellipse/>
        <Ellipse/>
        <Ellipse/>
        <Ellipse/>
        <Ellipse/>
      </div>
      <br/>
      <div className='support-control'>
        <p className='blueText'>Não encontrou a solução para o seu problema?</p>
        <br/>
        <Support/>
      </div>
</div>
  );
}

export default App;
