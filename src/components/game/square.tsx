import React from 'react';

type SquareVaule = String | null;

type Props = {
    value: SquareVaule;
    onClick: () => void;
}

function Square(props: Props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;