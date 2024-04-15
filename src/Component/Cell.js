import React from 'react'
import './Cell.css'

function Cell(props) {
    const current = props.current;
    const id = props.id;
    const cellValue = props.cellValue;
    const winMessage = props.winMessage;

    const handleClick = () => {
        if(winMessage !== '') {
            return;
        }
        if(cellValue === '') {
            if(current === 'X') {
                props.setCurrent('O')
                handleSave('X');
            } else {
                props.setCurrent('X')
                handleSave('O');
            }
        }
    }

    const handleSave = (value) => {
        const copyCells = props.cells.slice();
        copyCells[id] = value;
        props.setCells(copyCells);
    }

    return (
        <div 
            className='cell'
            onClick={handleClick}
        >
            <div className={(cellValue==='X'?cellValue:'') + ' cell__text'}>{props.cells[id]}</div>
        </div>
    )
}

export default Cell;
