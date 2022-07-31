import React from 'react';
import {add, divide, multiply, subtract} from "../util";

interface Props {
    x: number;
    y: number;
}

const SimpleCalculator = (props: Props) => {
    const {x, y} = props;

    return (
        <div>
            <h1>Simple Calculator</h1>
            <div>
                <span>Sum</span>
                <span style={{marginLeft: '10px'}}>{add(x,y)}</span>
            </div>
            <div>
                <span>Subtract</span>
                <span style={{marginLeft: '10px'}}>{subtract(x,y)}</span>
            </div>
            <div>
                <span>Multiply</span>
                <span style={{marginLeft: '10px'}}>{multiply(x,y)}</span>
            </div>
            <div>
                <span>Divide</span>
                <span style={{marginLeft: '10px'}}>{divide(x,y)}</span>
            </div>
        </div>
    )
};

export default SimpleCalculator;