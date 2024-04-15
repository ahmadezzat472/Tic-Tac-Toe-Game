import React, { useEffect } from 'react'
import './State.css'

function State({cellsValue, current, winMessage, setWinMessage}) {
    const winnersState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    useEffect( () => {
        winnersState.forEach(ele => {
            const oWin = ele.every((winindex) => cellsValue[winindex] === 'O');
            const xWin = ele.every((winindex) => cellsValue[winindex] === 'X');
            console.log(oWin, xWin);
            if(oWin) 
                setWinMessage('O is win');
            else if(xWin)
                setWinMessage('X is Win');
            else {
                const draw = cellsValue.every( (cell) => cell !== '')
                if(draw)
                    setWinMessage('draw');
            } 
        });
    },[cellsValue]);

    return (
        <div className='desc'>
            <p className='messageCurrent'>its now {current} turn</p>
            <h2 className='messageWin'>{winMessage}</h2>
        </div>
    )
}

export default State;