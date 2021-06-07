const combineReducers = require('./combineReducers')
const applyMiddleware = require('./applyMiddleware')

function createStore(reducer, initState, enhancer) {
    if (enhancer) {
        const newCreateStore = enhancer(createStore)
        return newCreateStore(reducer, initState)
    }
    let state = initState
    let listeners = []

    function subscribe(listener) {
        listeners.push(listener)
    }

    function dispatch(action) {
        state = reducer(state, action)
        for (let n of listeners) {
            n()
        }
    }

    function getState() {
        return state;
    }

    dispatch({type: Symbol()})
    return {
        subscribe,
        dispatch,
        getState,
    }
}

module.exports = {createStore, combineReducers, applyMiddleware}
