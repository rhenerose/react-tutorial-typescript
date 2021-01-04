import * as React from "react";
import Square from "./square";

type Props = {
    squares: Array<String>;
    onClick: (i:number) => void;
}

class Board extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        this.state = {
            squares: Array<String>(9).fill(""),
            xIsNext: true,
        }
    }
    
    // renderSquare(i: number) {
    //     return <Square value={this.state.squares[i]} />;
    // }
    renderSquare(i: number) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;