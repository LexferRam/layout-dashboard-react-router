function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 , dataJSON: state.dataJSON};
        case 'decrement':
            return { count: state.count - 1, dataJSON: state.dataJSON };
        case 'reset':
            return { count: 0 , dataJSON: []};
        case 'buscar':
            return { count:action.payload.count , dataJSON: action.payload.dataJSON };
        default:
            throw new Error();
    }
}

export default reducer