const redux = require('../src/tiny-redux')
const counter = require('./reducer/counter')
const user = require('./reducer/user')
const loggerMiddleware = require('./loggerMiddleware')
const timeMiddleware = require('./timeMiddleware')
const asyncMiddleware = require('./asyncMiddleware')
const {createStore, applyMiddleware, combineReducers} = redux
const middlewares = applyMiddleware(timeMiddleware, loggerMiddleware, asyncMiddleware)
let store = createStore(combineReducers({counter, user}), {user: {name: 'aa'}}, middlewares)
const next = store.dispatch;
console.log(next)
console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(function (dispatch) {
    setTimeout(() => {
        store.dispatch({type: 'user/name', payload: '444'})
    }, 1000)
})
store.dispatch({type: 'user/name', payload: '222'})
store.dispatch({type: 'counter/incremented'})
store.dispatch({type: 'counter/incremented'})
store.dispatch({type: 'counter/decremented'})
store.dispatch({type: 'user/name', payload: '333'})

