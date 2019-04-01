const defaultState = { number: 1, histories: [1], err: '' }

const numberReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            const newVal = state.number + action.value;
            return {
                ...state,
                number: newVal,
                histories: [...state.histories, newVal]
            };
        case 'SUB':
            const newValue = state.number - action.value;
            return {
                ...state,
                number: newValue,
                histories: [...state.histories, newValue]
            };
        case 'ERROR':
            return {
                ...state,
                err: 'Less than zero 123'
            }
        default:
            return state;
    }
}
export default numberReducer;