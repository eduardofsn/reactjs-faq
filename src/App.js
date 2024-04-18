import logo from './logo.svg';
import './App.css';
import Component from './component';
import Component2 from './component2';
import Component3 from './component3';
import Status from './status';



function App() {
  return (
  <div className="App">
        <Status/>
        <h1 className='title'>Perguntas Frequentes</h1>
        <div className='carrousel'>
            <Component/>
            <Component2/>
            <Component3/>
        </div>
</div>
  );
}

export default App;
