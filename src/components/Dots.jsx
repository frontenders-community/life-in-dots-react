import { useEffect, useState } from "react";
import Dot from "./Dot";
import './Dots.css'

function Dots(props) {
    const { elapsedTime } = props;
    const [mode, setMode] = useState("weeks");
    const [rows, setRows] = useState(52);
    const [cols, setCols] = useState(90);
    const [lifeDots, setLifeDots] = useState(0);
    const grid = [];

    useEffect(() => {
        if (mode === 'weeks') {
            setRows(52);
            setCols(90);
            setLifeDots(elapsedTime / 604800);
        } else if (mode === 'months') {
            setRows(36);
            setCols(30);
            setLifeDots(elapsedTime / 2592000);
        } else if (mode === 'years') {
            setRows(10);
            setCols(9);
            setLifeDots(elapsedTime / 31536000);
        }
    }, [mode, elapsedTime]);

    for (let i = 0; i < rows * cols; i++) {
        grid.push(<Dot
            key={i}
            width={rows}
            colored={i <= lifeDots}
            circle={mode === 'years'}
        />);
    }

    return (
        <div className="grid-container">
            <label htmlFor="mode">Your life in</label>
            <select name="mode" id="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
            </select>

            <div className="grid">
                {grid}
            </div>
        </div>
    )
}

export default Dots;