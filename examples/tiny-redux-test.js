const redux=require('../src/tiny-redux')
const {createStore,applyMiddleware}=redux
function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}
let store = createStore(counterReducer, {value:0})
console.log(store)
store.subscribe((r)=>{
    console.log(r)
    console.log(store.getState())
})
store.dispatch({...store.getState(),info:{age:2}})
