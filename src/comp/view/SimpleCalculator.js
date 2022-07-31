import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { add, divide, multiply, subtract } from "../util";
const SimpleCalculator = (props) => {
    const { x, y } = props;
    return (_jsxs("div", { children: [_jsx("h1", { children: "Simple Calculator" }), _jsxs("div", { children: [_jsx("span", { children: "Sum" }), _jsx("span", { style: { marginLeft: '10px' }, children: add(x, y) })] }), _jsxs("div", { children: [_jsx("span", { children: "Subtract" }), _jsx("span", { style: { marginLeft: '10px' }, children: subtract(x, y) })] }), _jsxs("div", { children: [_jsx("span", { children: "Multiply" }), _jsx("span", { style: { marginLeft: '10px' }, children: multiply(x, y) })] }), _jsxs("div", { children: [_jsx("span", { children: "Divide" }), _jsx("span", { style: { marginLeft: '10px' }, children: divide(x, y) })] })] }));
};
export default SimpleCalculator;
