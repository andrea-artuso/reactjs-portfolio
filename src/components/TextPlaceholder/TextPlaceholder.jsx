import { useState, useEffect } from 'react'
import './TextPlaceholder.css'

const TextPlaceholder = ( {rows, width, margin, height, spaceAbove, widthOffset} ) => {
    const [placeholderRows, setPlaceholderRows] = useState([])

    useEffect(() => {
        addRows(rows, setPlaceholderRows);
    }, [rows])
    return (
        <div style={{marginTop: spaceAbove}}>
            {
                placeholderRows.map(row => <div key={row} className="placeholder-row" style={{width: widthRNG(width, widthOffset), height: height, marginBottom: margin*2}}></div> )
            }
        </div>
    )
}

function addRows(rows, setPlaceholderRows){
    let arr = [];
    for (let i=0; i<rows; i++){
        arr.push(i);
    }

    setPlaceholderRows(arr);
}

function widthRNG(width, widthOffset){
    let minWidth = width-widthOffset;
    return Math.random() * (width - minWidth) + minWidth
}

export default TextPlaceholder
