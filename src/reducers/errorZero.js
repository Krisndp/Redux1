const err = 'false';
const errorZero = (state = err, action) => {
    switch (action.type) {
        case 'LESS_THAN_ZERO':
            return 'less than zero';
        default:
            return state;
    }
}
export default errorZero;