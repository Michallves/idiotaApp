import './App.css';
import { useState } from 'react'

function App() {

  const [yes, setYes] = useState(false)
  const [right, setRight] = useState(15)
  const [top, setTop] = useState()

  function move () {
    setTop(Math.floor(Math.random() * 40 + 30))
    setRight(Math.floor(Math.random() * 70))
  }

  return (
    <div className='container'>
      <p className='title'>{yes === false ? 'Quer Namorar Comigo ?':'Escolheu a melhor opção!!!'}</p>
        {yes === false ? (<div className='containerButton'>
        <button className='button' onClick={() => setYes(true)}>
          Sim
        </button>     
        <button style={{  background: 'white',
          minWidth: '120px',
          maxWidth: '220px',
          height: '60px',
          border: '0',
          borderRadius: '15px',
          fontSize: '20px',
          fontWeight: 'bold',
          position: 'absolute',
          color: 'brown',right: right + '%', top: top + '%'}} 
          onMouseEnter={move} onClick={move} onMouseMove={move}>
         Não
        </button>
      </div>):(<div> <p style={{fontSize: '300px'}}>&#x2764;&#xFE0F;</p> </div>)}
      <p style={{color: 'white', position: 'absolute', bottom: '0', margin: '20px'}}>Created by <a style={{color: 'white'}}href="https://www.instagram.com/michallves/" target={'_blank'}>@Michallves</a></p>
    </div>
  );
}


export default App;
