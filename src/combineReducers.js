function combineReducers(reducers) {
    console.log(reducers)
    const reducersKeys = Object.keys(reducers)
    return function (state, action) {
        const nextState = {}
        for (let [name, reducer] of Object.entries(reducers)) {
            nextState[name] = reducer(state[name], action)
        }
        return nextState;
    }
}

module.exports = combineReducers
