import { useState } from 'react';
import './App.css';
import Cell from './Component/Cell';
import State from './Component/State/State';

function App() {
  const [cells, setCells] = useState(["","","","","","","","",""]);
  const [current, setCurrent] = useState('X');
  const [winMessage, setWinMessage] = useState('');


  return (
    <div className="container">
      <h2 className='title'>Tic-Tac-Toe Game</h2>
      <div className='box'>
        {cells.map((cell, index) => 
          <Cell 
            key={index} 
            id={index}
            cells={cells} 
            setCells={setCells} 
            current={current}
            setCurrent={setCurrent}
            cellValue={cell}
            winMessage={winMessage}
          />
        )}
      </div>
      <State cellsValue={cells} current={current} winMessage={winMessage} setWinMessage={setWinMessage} />
    </div>
  );
}

export default App;
