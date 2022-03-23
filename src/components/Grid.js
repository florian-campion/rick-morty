import { useState } from "react";
import './Grid.css';

const Grid = (props) => {
    let [gridState, setGridState] = useState('card');

    return (
        <div className="grid">
            <ul>
                <li onClick={() => setGridState('card')}>Card</li>
                <li onClick={() => setGridState('list')}>List</li>
            </ul>
            <div className={gridState}>
                {props.children}
            </div>
        </div>
    )
}

export default Grid;