import './Dot.css'

function Dot(props) {
    const { width, colored, circle } = props;

    function getClassName() {
        let className = 'dot ';
        if (colored) {
            className += 'colored ';
        }
        if (circle) {
            className += 'circle'
        }
        return className;
    }

    return (
        <div
            className={getClassName()}
            style={{
                width: `calc(100% / ${width} - 4px)`,
                aspectRatio: '1 / 1'
            }}
        ></div>
    )
}

export default Dot;